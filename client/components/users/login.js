import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Tabs, WhiteSpace } from 'antd-mobile/dist/antd-mobile';

import WeChatSignIn from 'maodou/wechat/client/containers/sign-in-button';
import EmailForm from '../../containers/users/email-enrollment-form';
import LoginForm from '../../containers/users/login-form';



export default class Login extends Component {
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div style={{paddingTop: '25%'}}>
        <Helmet title='用户登录' />
        <WhiteSpace />
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
        <WhiteSpace />
      </div>
    );
  }
}
