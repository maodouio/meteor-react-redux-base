import React from 'react';

import config from '/lib/configs/wechat';

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

export const UIState = {
  IDLE: 'idle',
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn',
  ERROR: 'error'
};

export default (props) => {
  let redirectUrl = window.location.href;
  redirectUrl = removeURLParameter(redirectUrl, 'code');
  redirectUrl = removeURLParameter(redirectUrl, 'state');

  const authUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize' +
    `?appid=${config.appId}&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

  switch (props.uiState) {
    case UIState.IDLE:
      return <a href={authUrl}>微信一键登录</a>;

    case UIState.LOGGED_IN:
      return <span>已登录</span>;

    case UIState.LOGGING_IN:
      return <span>正在登录...</span>;

    default:
      return <div>登录失败 <a href={authUrl}>重试登录</a></div>;
  }
}
