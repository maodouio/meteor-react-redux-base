import React from 'react';
import WeChatSignIn from '/maodou/wechat/client/containers/sign-in-button';
import EmailForm from '../../containers/users/email-enrollment-form';
import LoginForm from '../../containers/users/login-form';

export default (props) => (
  <div className="container">
    <EmailForm/>
    <LoginForm/>
    <div className="text-center">
      <WeChatSignIn/>
    </div>
  </div>
);
