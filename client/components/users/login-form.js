import React from 'react';

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
      <form onSubmit={this.onSubmit}>
        邮箱：<input type="text" ref={(c) => this._emailInput = c}/>
        密码：<input type="password" ref={(c) => this._passwordInput = c}/>
        <input type="submit" value="登录" />
      </form>);
  }
}
