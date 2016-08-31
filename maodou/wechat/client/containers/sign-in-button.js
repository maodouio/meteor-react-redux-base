import React from 'react';
import {composeAll, withTracker} from 'react-komposer-plus';
import {useDeps} from 'react-simple-di';

import SignInButton, {UIState} from '../components/sign-in-button'

function removeURLParameter(url, parameter) {
  //prefer to use l.search if you have a location/link object
  var urlparts= url.split('?');
  if (urlparts.length>=2) {

    var prefix= encodeURIComponent(parameter)+'=';
    var pars= urlparts[1].split(/[&;]/g);

    //reverse iteration as may be destructive
    for (var i= pars.length; i-- > 0;) {
      //idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }

    url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
    return url;
  } else {
    return url;
  }
}

const composer = () => {
  let uiState = UIState.IDLE; // closure variable

  return ({context}, onData) => {
    const {Meteor, Accounts, FlowRouter} = context;
    let code = FlowRouter.getQueryParam('code');

    if (Meteor.loggingIn()) {
      uiState = UIState.LOGGING_IN;
      onData(null, {uiState});
    } else if (Meteor.user()) {
      uiState = UIState.LOGGED_IN;
      onData(null, {uiState});
    } else if (code && uiState === UIState.IDLE) {
      uiState = UIState.LOGGING_IN;
      onData(null, {uiState});
      Meteor.call('wechatAuth.getUserInfo', code, (e, r) => {
        if (e) {
          uiState = UIState.ERROR;
          onData(null, {uiState});
          return;
        }

        const {openid, ...profile} = r;
        const loginRequest = {
          openid,
          profile,
          loginMethod: "WECHAT",
          createdAt: new Date()
        };
        Accounts.callLoginMethod({
          methodArguments: [loginRequest],
          userCallback: e => {
            uiState = UIState.ERROR;
            onData(null, {uiState});
          }
        });
      });
    } else {
      onData(null, {uiState});
    }
  };
};

const depsToProps = (context) => {
  let redirectUrl = window.location.href;
  redirectUrl = removeURLParameter(redirectUrl, 'code');
  redirectUrl = removeURLParameter(redirectUrl, 'state');

  const authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize' +
    `?appid=${context.configs.wechat.appId}&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

  return {
    context,
    authUrl
  };
};

export default composeAll(
  withTracker(composer()),
  useDeps(depsToProps)
)(SignInButton);
