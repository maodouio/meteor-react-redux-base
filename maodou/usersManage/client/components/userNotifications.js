import React, { Component, PropTypes } from 'react';

export default class UserNotifications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h1 style={{paddingTop: '100px'}}>我的消息</h1>
      </div>
    );
  }
}
