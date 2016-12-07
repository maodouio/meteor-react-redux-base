import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { List, Button, Flex } from 'antd-mobile/dist/antd-mobile';
import { userAvatar } from 'lib/helpers';
import Helmet from 'react-helmet';

const Item = List.Item;

export default class UserCenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggedIn } =this.props;
    return (
      <div>
        <Helmet title='用户中心' />
        { loggedIn ? this.renderUser(this.props) : this.renderUserLogin()}
        <List>
          <Link to='/user/vip'><Item arrow="horizontal">会员中心</Item></Link>
          <Link to='/user/info'><Item arrow="horizontal">个人资料</Item></Link>
          <Link to='/user/collections'><Item arrow="horizontal">我的收藏</Item></Link>
          <Link to='/user/groups'><Item arrow="horizontal">我的小组</Item></Link>
          <Link to='/user/notifications'><Item arrow="horizontal">我的消息</Item></Link>
          { this.props.loggedIn ? <Link to='/user'><Item onClick={() => Meteor.logout()}>退出登录</Item></Link> : <span/>}
        </List>
      </div>
    );
  }

  renderUser(props) {
    if (props.isWechat) {
      return (
        <Flex justify="around" direction="column" style={{height: '5rem', paddingTop: '1rem'}}>
          <div>
            <img src={props.avatarWechat} style={{width: '1.5rem', height: '1.5rem', borderRadius: '50%', lineHeight: '1.5rem'}}></img>
          </div>
          <h4 style={{fontSize: '.3rem'}}>{props.nickname}</h4>
          <Flex justify="center" style={{ margin: '.1rem' }}>
            { props.isAdmin ? <Link to='/admin'><Button inline>管理员后台</Button></Link> : <div /> }
            <Link to='/user/share'><Button type="primary" inline>推荐给好友</Button></Link>
          </Flex>
        </Flex>
      );
    }
    return (
      <Flex justify="around" direction="column" style={{height: '5rem', paddingTop: '1rem'}}>
        <div style={{width: '1.5rem', height: '1.5rem', borderRadius: '50%', backgroundColor: 'rebeccapurple', textAlign: 'center', color: '#fff', lineHeight: '1.5rem', fontSize: '1rem'}}>
          {userAvatar(props.nickname)}
        </div>
        <h4 style={{fontSize: '.3rem'}}>{props.nickname}</h4>
        <Flex justify="center" style={{ margin: '.1rem' }}>
          { props.isAdmin ? <Link to='/admin'><Button inline>管理员后台</Button></Link> : <div /> }
          <Link to='/user/share'><Button type="primary" inline>推荐给好友</Button></Link>
        </Flex>
      </Flex>
    );
  }

  renderUserLogin() {
    return (
      <Flex justify="around" direction="column" style={{height: '5rem', paddingTop: '1rem'}}>
        <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rebeccapurple'}}></div>
        <p style={{fontSize: '.3rem'}}>生命不息，奋斗不止</p>
        <Flex justify="center" style={{ width: '3.3rem' }}>
          <Link to='/login'><Button inline type="primary">登录</Button></Link>
        </Flex>
      </Flex>
    );
  }
}

UserCenter.propTypes = {
  loggedIn: PropTypes.bool,
  avatarWechat: PropTypes.string,
  nickname: PropTypes.string,
  isWechat: PropTypes.bool,
  isAdmin: PropTypes.bool,
};
