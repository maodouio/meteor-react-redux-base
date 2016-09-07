import React from 'react';
import {Link} from 'react-router';

export const UIState = {
  IDLE: 'idle',
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn',
  ERROR: 'error'
};

export default (props) => {
  switch (props.uiState) {
    case UIState.IDLE:
      return <Link to={props.authUrl}>微信一键登录</Link>;

    case UIState.LOGGED_IN:
      return <span>已登录</span>;

    case UIState.LOGGING_IN:
      return <span>正在登录...</span>;

    default:
      return <div>登录失败 <Link to={props.authUrl}>重试登录</Link></div>;
  }
}
