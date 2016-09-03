import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.enrollWithEmail(this._input.value);
  }

  render() {
    if (this.props.loggingIn) return <div>正在登录</div>;
    if (!this.props.loggedIn) return <div>尚未登录，请登录后绑定邮箱</div>;

    return (
      <div className="row">
        <div className="col-sm-12">
          <p>请填写登录用的邮箱地址，我们将发送一个链接到你邮箱，通过该链接设置登录密码</p>
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input className="form-control" type="text" ref={(c) => this._input = c}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">提交</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
