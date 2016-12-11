import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { qrcode } from 'meteor/dschulz:jquery-qrcode';
import { $ }from 'meteor/jquery';
import { isEmpty } from 'lodash/lang';
import { defaultImgUrl } from 'lib/helpers/defaultValue';
import { Flex, WhiteSpace } from 'antd-mobile/dist/antd-mobile';

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
    return(
      <Flex direction='column' justify='center' style={{fontSize: '.3rem', paddingTop: '1rem'}}>
        <Helmet title='我的推广' />
        <p>请长按二维码保存或分享</p>
        <WhiteSpace size="lg" />
        <div id='qrcode'></div>
      </Flex>
    );
  }
}
