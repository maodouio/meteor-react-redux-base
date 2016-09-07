import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.loginWithPassword(this._emailInput.value, this._passwordInput.value);
  }

  render() {
    if (this.props.loggedIn) return <div>已登录</div>;
    if (this.props.loggingIn) return <div>正在登录</div>;

    return (
      <div className="login-container">
        <div className="row">
          <div className="col-md-12">
            {/*<div className="text-center m-b-md">*/}
              {/*<h3>PLEASE LOGIN TO APP</h3>*/}
              {/*<small>This is the best app ever!</small>*/}
            {/*</div>*/}
            <div className="hpanel">
              <div className="panel-body">
                <form onSubmit={this.onSubmit} id="loginForm">
                  <div className="form-group">
                    <label className="control-label" htmlFor="username">邮箱</label>
                    <input type="text" ref={(c) => this._emailInput = c} placeholder="example@gmail.com" title="Please enter you username" required="" name="username" id="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="password">密码</label>
                    <input type="password" ref={(c) => this._passwordInput = c} title="Please enter your password" placeholder="******" required="" name="password" id="password" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-success btn-block">登陆</button>
                  <Link className="btn btn-default btn-block" to="#">注册</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
