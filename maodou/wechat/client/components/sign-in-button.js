import React, { Component } from 'react';
import ShowToast from 'client/components/common/showToast';
import { Toast, WingBlank, Button } from 'antd-mobile/dist/antd-mobile';

export const UIState = {
  IDLE: 'idle',
  LOGGING_IN: 'loggingIn',
  LOGGED_IN: 'loggedIn',
  ERROR: 'error'
};

export default class SignInButton extends Component {
  render() {
    const { isError, isLoggingIn, isLoggedIn, isDefault, authUrl } = this.props;
    return(
      <div style={{width: '100%'}}>
        { isDefault ? <Button type='ghost' onClick={() => {window.location.href = authUrl;}}>微信登录</Button> : <span />}
        { isLoggingIn ? <WingBlank>
            <ShowToast type='loading' text='正在登录...' />
          </WingBlank> : <span />}
        { isLoggedIn ?  <WingBlank>
            <ShowToast type='success' text='登录成功' />
          </WingBlank> : <span />}
        { isError ?  <div>
            <a href={authUrl}>重试登录</a>
          </div> : <span />}
      </div>
    );
  }
}

