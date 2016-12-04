import React, { Component, PropTypes } from 'react';
import { qrcode } from 'meteor/dschulz:jquery-qrcode';
import { $ }from 'meteor/jquery';

export default class UserShare extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const path = 'https://' + window.location.hostname + '/';
    const options = {
      render: 'image',
      size: 300,
      text: path,
    };
    $('#qrcode').qrcode(options);
  }

  render() {
    const styles = this.getStyles();
    return(
      <div style={styles.wrap}>
        <h3 style={styles.text}>请长按二维码</h3>
        <div id='qrcode' style={styles.qrcode}></div>
      </div>
    );
  }

  getStyles() {
    return {
      text: {
        marginBottom: '20px',
      },
      wrap: {
        display: 'flex',
        width: '100%',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
      },
      qrcode: {

      },
    };
  }
}
