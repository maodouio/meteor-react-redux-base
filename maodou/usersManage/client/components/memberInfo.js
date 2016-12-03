import React, { Component, PropTypes } from 'react';

export default class MemberInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h1>VIP</h1>
      </div>
    );
  }

  getStyles() {
    return {
      wrapper: {

      }
    }
  }
}
