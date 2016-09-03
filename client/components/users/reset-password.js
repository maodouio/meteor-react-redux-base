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
    this.props.resetPassword(this._input.value, (err) => {
      if (err) {
        console.log(err);
        this.setState({uiState: 'FAIL'});
      } else {
        this.setState({uiState: 'SUCCESS'});
      }
    });
  }

  render() {
    if (this.state.uiState === 'SENDING') return <div>正在设置密码...</div>;
    if (this.state.uiState === 'SUCCESS') return <div>密码设置成功</div>;

    return (
      <form onSubmit={this.onSubmit}>
        {this.state.uiState === 'FAIL' && <p>密码设置失败，请重试</p>}
        密码：<input type="password" ref={(c) => this._input = c}/>
        <input type="submit" value="设置" />
      </form>);
  }
}
