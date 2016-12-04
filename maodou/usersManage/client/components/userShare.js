import React, { Component, PropTypes } from 'react';
import { qrcode } from 'meteor/dschulz:jquery-qrcode';
import { $ }from 'meteor/jquery';
import { isEmpty } from 'lodash/lang';
import { defaultImgUrl } from 'lib/helpers/defaultValue';

export default class UserShare extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const user = Meteor.user();
    const imgUrl = user ? isEmpty(user.profile.headimgurl) ? defaultImgUrl : user.profile.headimgurl : defaultImgUrl;
    const path = 'https://' + window.location.hostname + '/';
    const options = {
      render: 'image',
      size: 300,
      text: path,
      minVersion: 5,
      fill: '#2196F3',
      backgroud: '#fff',
      ecLevel: 'H',
      model: 4,
      quiet: 1,
      mSize: 0.2,
      image: imgUrl,
    };
    $('#qrcode').empty().qrcode(options);
  }

  render() {
    const styles = this.getStyles();
    return(
      <div style={styles.wrap}>
        <h3 style={styles.text}>请长按二维码保存或分享</h3>
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
