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

function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const appId = ({ context, redirectUrl }, onData) => {
  const { Collections } = context;
  const wechatPkg = Collections.Packages.findOne({ name: 'wechat' });
  if (wechatPkg) {
    const authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize' +
      `?appid=${wechatPkg.configs.appId}&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
    onData(null, { authUrl });
  }
};

const composer = () => {
  return ({context, location}, onData) => {
    const {Meteor, Accounts} = context;
    const code = getParameterByName('code');

    if (Meteor.user()) {
      onData(null, { isLoggedIn: true});
    } else if (code) {
      onData(null, {
        isLoggingIn: true,
      });
      Meteor.call('wechatAuth.getUserInfo', code, (e, r) => {
        if (e) {
          onData(null, {
            isError: true,
          });
          return;
        }

        const {openid, ...profile} = r;
        profile.loginMethod = 'WECHAT';
        const loginRequest = {
          openid,
          profile,
          createdAt: new Date()
        };
        Accounts.callLoginMethod({
          methodArguments: [loginRequest],
          userCallback: e => {
            onData(null, {isError: true});
          }
        });
      });
    } else {
      onData(null, {isDefault: true});
    }
  };
};

const depsToProps = (context) => {
  let redirectUrl = window.location.href;
  redirectUrl = removeURLParameter(redirectUrl, 'code');
  redirectUrl = removeURLParameter(redirectUrl, 'state');

  return {
    context,
    redirectUrl
  };
};

export default composeAll(
  withTracker(appId),
  withTracker(composer()),
  useDeps(depsToProps)
)(SignInButton);
