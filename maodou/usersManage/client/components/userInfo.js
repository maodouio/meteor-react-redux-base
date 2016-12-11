import React, { Component, PropTypes } from 'react';
import { List, Button, Flex, WhiteSpace } from 'antd-mobile/dist/antd-mobile';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

const Item = List.Item;

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nickname, phoneNumber, email, sex, city, job, hobby} = this.props;
    return (
      <div style={{fontSize: '.3rem', paddingTop: '1rem'}}>
        <Helmet title='用户资料' />
        <List renderHeader={() => '个人资料'}>
          <Item extra={nickname}>用户名：</Item>
          <Item extra={phoneNumber}>手机号：</Item>
          <Item extra={email}>邮箱：</Item>
          <Item extra={sex}>性别：</Item>
          <Item extra={city}>所在城市：</Item>
          <Item extra={job}>职业：</Item>
          <Item extra={hobby}>爱好：</Item>
        </List>
        <WhiteSpace size='md' />
        <Flex justify='center' >
          <Button type='ghost' inline>完善资料</Button>
        </Flex>
      </div>
    );
  }
}

UserInfo.propTypes = {
  nickname: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  sex: PropTypes.string,
  city: PropTypes.string,
  job: PropTypes.string,
  hobby: PropTypes.string,
};
