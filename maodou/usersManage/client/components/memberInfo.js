import React, { Component, PropTypes } from 'react';
import { Button, Flex } from 'antd-mobile/dist/antd-mobile';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class MemberInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isMember, loggedIn } = this.props;
    return(
      <Flex justify="center" algin='center' direction="column" style={{height: '5rem', paddingTop: '1rem'}}>
        <Helmet title='我的会员' />
        { loggedIn ? this.renderMember(isMember) : this.renderLogin()}
      </Flex>
    );
  }

  renderMember(isMember) {
    if (isMember) {
      return(
        <div>
          <h3>您已经是会员了</h3>
        </div>
      );
    }
    return(
      <div>
        <h3>您还不是会员</h3>
        <p>成为会员，享受更多权益</p>
        <Link to=''><Button type='primary' inline>成为会员</Button></Link>
      </div>
    );
  }

  renderLogin() {
    return(
      <div>
        <h3>尚未登录</h3>
        <Link to='/login'><Button type='primary' inline>去登录</Button></Link>
      </div>
    );
  }
}

MemberInfo.propTypes = {
  loggedIn: PropTypes.bool,
  isMember: PropTypes.bool,
};
