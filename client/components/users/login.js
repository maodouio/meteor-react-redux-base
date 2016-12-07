import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import WeChatSignIn from 'maodou/wechat/client/containers/sign-in-button';
import EmailForm from '../../containers/users/email-enrollment-form';
import LoginForm from '../../containers/users/login-form';

export default (props) => (
  <div className="container">
    <Helmet title='用户登录' />
    {/* props.isWechatVerified ? <span /> : props.notWechat ? <span /> :<EmailForm/> */}
    {/* props.avatar ? <img src={props.avatar} style={styles.avatar}></img> : <span /> */}
    {<LoginForm/>}
    {<div className="text-center"><WeChatSignIn/></div>}
  </div>
);
