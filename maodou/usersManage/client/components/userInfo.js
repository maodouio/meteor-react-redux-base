import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h1 style={{paddingTop: '100px'}}>个人资料</h1>
        <p>头像</p>
        <p>手机号</p>
        <p>邮箱</p>
        <p>更换密码</p>
        <p>完善资料</p>
      </div>
    );
  }
}
