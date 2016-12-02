import React, { Component, PropTypes } from 'react';

export default class UserCollections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h1 style={{paddingTop: '100px'}}>我的收藏</h1>
      </div>
    );
  }
}
