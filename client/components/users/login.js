import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Tabs, WhiteSpace } from 'antd-mobile/dist/antd-mobile';

import WeChatSignIn from 'maodou/wechat/client/containers/sign-in-button';
import LoginForm from '../../containers/users/login-form';
import WechatLogin from '../../containers/users/wechatLogin';
import { browserHistory } from 'react-router';

export default class Login extends Component {
  render() {
    const { isWechat, nickname, loggedIn, isBind } = this.props;
    return (
      <div style={{paddingTop: '45%'}}>
        <Helmet title='用户登录' />
        <WhiteSpace />
        { loggedIn ? isWechat ? isBind ? browserHistory.push('/user') : <WechatLogin /> : this.renderTabs() : this.renderTabs()}
        <WhiteSpace />
      </div>
    );
  }

  renderTabs() {
    const TabPane = Tabs.TabPane;
    return (
      <LoginForm />
    );
  }
}

Login.propTypes = {
  isWechat: PropTypes.bool,
  nickname: PropTypes.string,
  loggedIn: PropTypes.bool,
  isBind: PropTypes.bool,
};
