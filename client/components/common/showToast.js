import React, { Component } from 'react';
import { Toast, WingBlank } from 'antd-mobile/dist/antd-mobile';

export default class ShowToast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WingBlank>
        {this.renderToast(this.props)}
      </WingBlank>
    );
  }

  renderToast(props) {
    const { type, text } = props;
    switch(type) {
      case 'info':
        return Toast.info(text, 1);
      case 'success':
        return Toast.success(text, 1);
      case 'fail':
        return Toast.fail(text, 1);
      case 'offline':
        return Toast.offline(text, 1);
      case 'loading':
        return Toast.loading(text);
    }
  }
}
