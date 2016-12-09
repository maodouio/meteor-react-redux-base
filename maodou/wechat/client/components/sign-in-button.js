import React from 'react';
import { Link, browserHistory } from 'react-router';
import ShowToast from 'client/components/common/showToast';
import { Toast, WingBlank } from 'antd-mobile/dist/antd-mobile';

export const UIState = {
  IDLE: 'idle',
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn',
  ERROR: 'error'
};

export default (props) => {
  switch (props.uiState) {
    case UIState.IDLE:
      return <a href={props.authUrl}><i className="fa fa-weixin fa-4x" style={{marginTop: '1rem'}}></i></a>;
    case UIState.LOGGED_IN:
      return (
        <WingBlank>
          <ShowToast type='success' text='登录成功' />
        </WingBlank>
      );
    case UIState.LOGGING_IN:
      return (
        <WingBlank>
          <ShowToast type='loading' text='正在登录...' />
        </WingBlank>
      );
    default:
      return <div>
        <ShowToast type='fail' text='登录失败' />
        <a href={props.authUrl}>重试登录</a>
      </div>;
  }
};
