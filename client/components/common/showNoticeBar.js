import React, { Component } from 'react';
import { NoticeBar, WhiteSpace } from 'antd-mobile/dist/antd-mobile';

export default class ShowNoticeBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
          {this.renderNotice(this.props)}
        <WhiteSpace size="lg" />
      </div>
    );
  }

  renderNotice(props) {
    const { type, text } = props;
    switch(type) {
      case 'info':
        return <NoticeBar type="info" mode="closable">{text}</NoticeBar>;
      case 'success':
        return <NoticeBar type="success" mode="closable">{text}</NoticeBar>;
      case 'error':
        return <NoticeBar type="error" mode="closable">{text}</NoticeBar>;
      case 'question':
        return <NoticeBar type="question" mode="closable">{text}</NoticeBar>;
      case 'warn':
        return <NoticeBar type="warn" mode="closable">{text}</NoticeBar>;
    }
  }
}
