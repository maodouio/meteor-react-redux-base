import React, { Component, PropTypes } from 'react';
import { List, Button } from 'antd-mobile/dist/antd-mobile';

const Item = List.Item;

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nickname, email, sex, city, job, hobby} = this.props;
    return (
      <List style={{marginTop: '40%'}} renderHeader={() => '个人资料'}>
        <Item extra={nickname}>用户名：</Item>
        <Item extra={email}>邮箱：</Item>
        <Item extra={sex}>性别：</Item>
        <Item extra={city}>所在城市：</Item>
        <Item extra={job}>职业：</Item>
        <Item extra={hobby}>爱好：</Item>
      </List>
    );
  }
}
