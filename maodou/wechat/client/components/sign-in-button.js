import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ShowToast from 'client/components/common/showToast';
import { Toast, WingBlank } from 'antd-mobile/dist/antd-mobile';

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
      <div>
        { isDefault ? <a href={authUrl}>
            <i className="fa fa-weixin fa-4x" style={{marginTop: '1rem'}}></i>
          </a> : <span />}
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

