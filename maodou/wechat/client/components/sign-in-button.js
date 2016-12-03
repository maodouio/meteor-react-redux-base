import React from 'react';
import { browserHistory } from 'react-router';

export const UIState = {
  IDLE: 'idle',
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn',
  ERROR: 'error'
};

export default (props) => {
  switch (props.uiState) {
    case UIState.IDLE:
      return <a href={props.authUrl}>微信一键登录</a>;

    case UIState.LOGGED_IN:
      browserHistory.push('/user');
      return;
    case UIState.LOGGING_IN:
      return <span>正在登录...</span>;

    default:
      return <div>登录失败 <a href={props.authUrl}>重试登录</a></div>;
  }
}
