import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.resetPassword(this._input.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        密码：<input type="password" ref={(c) => this._input = c}/>
        <input type="submit" value="设置" />
      </form>);
  }
}
