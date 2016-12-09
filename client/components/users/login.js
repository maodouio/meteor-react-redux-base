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
      <div style={{paddingTop: '25%'}}>
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
      <Tabs defaultActiveKey="wechat">
        <TabPane tab="微信登录" key="wechat">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <WeChatSignIn/>
          </div>
        </TabPane>
        <TabPane tab="手机号登录" key="phone">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LoginForm/>
          </div>
        </TabPane>
      </Tabs>
    );
  }
}

Login.propTypes = {
  isWechat: PropTypes.bool,
  nickname: PropTypes.string,
  loggedIn: PropTypes.bool,
  isBind: PropTypes.bool,
};
