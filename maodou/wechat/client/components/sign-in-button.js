import React from 'react';
import { Link, browserHistory } from 'react-router';
import ShowToast from 'client/components/common/showToast';
import { Toast, WingBlank, Button } from 'antd-mobile/dist/antd-mobile';

export const UIState = {
  IDLE: 'idle',
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn',
  ERROR: 'error'
};

export default (props) => {
  console.log(props);
  switch (props.uiState) {
    case UIState.IDLE:
      return <Button type='ghost' onClick={() => {window.location.href = props.authUrl;}}>微信登录</Button>;
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
