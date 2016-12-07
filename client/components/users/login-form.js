import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { dispatch, loginWithPassword } = this.props;
    const phone = this.refs.phone.value;
    const password = this.refs.password.value;
    dispatch(loginWithPassword(phone, password));
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
                    <label className="control-label">手机号</label>
                    <input style={{fontSize: 22, height: 42}} type="text" ref='phone' title="请输入手机号" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label">密码</label>
                    <input style={{fontSize: 22, height: 42}} type="password" ref='password' title="请输入密码" placeholder="******" className="form-control" />
                  </div>
                  <button style={{fontSize: 32}} type="submit" className="btn btn-success btn-block">登录</button>
                  <Link style={{fontSize: 32}} className="btn btn-default btn-block" to="/register">注册</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func,
  loginWithPassword: PropTypes.func,
};
