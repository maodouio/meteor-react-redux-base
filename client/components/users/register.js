import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, createNewUser } = this.props;
    return (
      <div className="login-container">
        <div className="row">
          <div className="col-md-12">
            <div className="hpanel" style={{ paddingTop: '60px'}}>
              <div className="panel-body">
                <form onSubmit={(e) => dispatch(createNewUser(e))} id="loginForm">
                  <div className="form-group">
                    <label className="control-label" htmlFor="username">用户名</label>
                    <input type="text" placeholder="your nickname" title="Please enter you username" required="" name="username" id="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">邮箱</label>
                    <input type="text" placeholder="example@gmail.com" title="Please enter you email" required="" name="email" id="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="password">密码</label>
                    <input type="password" title="Please enter your password" placeholder="******" required="" name="password" id="password" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-success btn-block">立即注册</button>
                  <Link className="btn btn-default btn-block" to="/">已有账号，马上登录</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propType = {
  dispatch: PropTypes.func,
  createNewUser: PropTypes.func
};
