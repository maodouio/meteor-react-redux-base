import React from 'react';
import WeChatSignIn from '/maodou/wechat/client/containers/sign-in-button';
import EmailForm from '../../containers/users/email-enrollment-form';
import LoginForm from '../../containers/users/login-form';

export default (props) => (
  <div>
    Home page
    <EmailForm/>
    <LoginForm/>
    <WeChatSignIn/>
  </div>
);
