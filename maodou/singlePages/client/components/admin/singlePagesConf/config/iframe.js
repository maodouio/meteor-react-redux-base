import React, { Component } from 'react';

export default class Iframe extends Component {
  render () {
    return (
      <div className="col-sm-12 col-md-4">
        <iframe
          width='740'
          height='480'
          frameBorder='0'
          allowFullScreen
          src='/main'>
        </iframe>
      </div>
    );
  }
}
