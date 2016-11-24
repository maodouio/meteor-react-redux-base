import React from 'react';
import WeChatSignIn from 'maodou/wechat/client/containers/sign-in-button';
import EmailForm from '../../containers/users/email-enrollment-form';
import LoginForm from '../../containers/users/login-form';

export default (props) => (
  <div className="container" style={{ paddingTop: '70px'}}>
    {props.isWechatVerified ? <div>欢迎回来，{props.nickname}</div> : props.notWechat ? <div>欢迎回来，{props.nickname}</div> :<EmailForm/>}
    {props.avatar ? <img src={props.avatar} style={styles.avatar}></img> : <span />}
    {props.loggedIn || <LoginForm/>}
    {props.loggedIn || <div className="text-center"><WeChatSignIn/></div>}
  </div>
);

const styles = {
  avatar: {
    height: '40px',
    width: '40px',
    borderRadius: '50%'
  }
};
