import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { dispatch, createNewUser } = this.props;
    const username = this.refs.username.value;
    const phone = this.refs.phone.value;
    const verifyCode = this.refs.verifyCode.value;
    const password = this.refs.password.value;
    const data = { username, phone, verifyCode, password };
    dispatch(createNewUser(data));
  }

  render() {
    return (
      <div className="login-container" style={{paddingTop: '30%'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="hpanel">
              <div className="panel-body">
                <form onSubmit={this.onSubmit} id="loginForm">
                  <div className="form-group">
                    <label className="control-label">用户名</label>
                    <input style={{fontSize: 22, height: 42}} type="text" ref='username' placeholder="你的用户名" title="请输入用户名" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label">手机号</label>
                    <input style={{fontSize: 22, height: 42}} type="text" ref='phone' title="请输入手机号" className="form-control" />
                    <button style={{fontSize: 32}} className='btn btn-default'>发送验证码</button>
                  </div>
                  <div className="form-group">
                    <label className="control-label">验证码</label>
                    <input style={{fontSize: 22, height: 42}} type="text"  ref='verifyCode' title="请输入手机验证码" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label">密码</label>
                    <input style={{fontSize: 22, height: 42}} type="password" ref='password' title="请输入密码" placeholder="******" className="form-control" />
                  </div>
                  <button style={{fontSize: 32}} type="submit" className="btn btn-success btn-block">立即注册</button>
                  <Link style={{fontSize: 32}} className="btn btn-default btn-block" to="/login">已有账号，马上登录</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func,
  createNewUser: PropTypes.func
};
