import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='admin-package-wrapper row'>
        <h1 style={{paddingTop: '100px'}}>users list</h1>
      </div>
    );
  }
}
