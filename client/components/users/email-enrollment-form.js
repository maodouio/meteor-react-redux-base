import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {uiState: 'INIT'};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({uiState: 'SENDING'});
    this.props.enrollWithEmail(this._input.value, (err) => {
      if (err) {
        console.log(err);
        this.setState({uiState: 'FAIL'});
      } else {
        this.setState({uiState: 'SUCCESS'});
      }
    });
  }

  render() {
    if (this.state.uiState === 'SENDING') return <div>正在发送邮件...</div>;
    if (this.state.uiState === 'SUCCESS') return <div>邮件已发送，请查看您的邮箱</div>;

    return (
      <div className="row">
        <div className="col-sm-12">
          {this.state.uiState === 'FAIL' && <p>邮件发送失败，请重试</p>}
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
