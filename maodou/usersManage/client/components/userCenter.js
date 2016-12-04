import React, {Component, PropTypes} from 'react';
import { Link, browserHistory } from 'react-router';
import { List, Button, Flex } from 'antd-mobile/dist/antd-mobile';
import { userAvatar } from 'lib/helpers';

const Item = List.Item;

export default class UserCenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggedIn } =this.props;
    return (
      <div>
        { loggedIn ? this.renderUser(this.props) : this.renderUserLogin()}
        <List>
          <Item arrow="horizontal" onClick={() => {browserHistory.push('/user/vip');}}>会员中心</Item>
          <Item arrow="horizontal" onClick={() => {browserHistory.push('/user/info');}}>个人资料</Item>
          <Item arrow="horizontal" onClick={() => {browserHistory.push('/user/collections');}}>我的收藏</Item>
          <Item arrow="horizontal" onClick={() => {browserHistory.push('/user/groups');}}>我的小组</Item>
          <Item arrow="horizontal" onClick={() => {browserHistory.push('/user/notifications');}}>我的消息</Item>
          { this.props.loggedIn ? <Link to='/'><Item onClick={() => Meteor.logout()}>退出登录</Item></Link> : <span/>}
        </List>
      </div>
    );
  }

  renderUser(props) {
    if (props.isWechat) {
      return (
        <Flex justify="around" direction="column" style={{height: '6rem', paddingTop: '1rem'}}>
        <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rebeccapurple'}}>
          <img src={props.avatarWechat}></img>
        </div>
        <h4>{props.nickname}</h4>
        <p style={{fontSize: '.3rem'}}>生命不息，奋斗不止</p>
        <Flex justify="between" style={{ width: '3.3rem' }}>
          { props.isAdmin ? <Button inline onClick={() => {browserHistory.push('/admin');}}>管理员后台</Button> : <div /> }
          <Button type="primary" inline onClick={() => {browserHistory.push('/user/share');}}>推荐给好友</Button>
        </Flex>
      </Flex>
      );
    }
    return (
      <Flex justify="around" direction="column" style={{height: '6rem', paddingTop: '1rem'}}>
        <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rebeccapurple'}}>
          {userAvatar(props.nickname)}
        </div>
        <h4>{props.nickname}</h4>
        <p style={{fontSize: '.3rem'}}>生命不息，奋斗不止</p>
        <Flex justify="between" style={{ width: '3.3rem' }}>
          { props.isAdmin ? <Button inline onClick={() => {browserHistory.push('/admin');}}>管理员后台</Button> : <div /> }
          <Button type="primary" inline onClick={() => {browserHistory.push('/user/share');}}>推荐给好友</Button>
        </Flex>
      </Flex>
    );
  }

  renderUserLogin() {
    return (
      <Flex justify="around" direction="column" style={{height: '6rem', paddingTop: '1rem'}}>
        <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rebeccapurple'}}></div>
        <p style={{fontSize: '.3rem'}}>生命不息，奋斗不止</p>
        <Flex justify="between" style={{ width: '3.3rem' }}>
          <Button inline onClick={() => {browserHistory.push('/login');}}>登录</Button>
          <Button type="primary" inline onClick={() => {browserHistory.push('/register');}}>注册</Button>
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
