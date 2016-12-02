import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { userAvatar } from 'lib/helpers';

export default class UserCenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = this.getStyles();
    const { loggedIn, avatarWechat, nickname, isWechat } =this.props;
    return(
      <div className='container' style={styles.userWrapper}>
        <div className='user-login' style={styles.userLogin}>
          { loggedIn ? this.renderUser(this.props) : this.renderUserLogin()}
        </div>
        <div className='user-conf' style={styles.userConf}>
          {this.renderConf()}
        </div>
      </div>
    );
  }

  renderConf() {
    return (
      <div style={this.getStyles().list}>
        <Link to='/user/vip' className='btn btn-default btn-block'>会员中心</Link>
        <Link to='/user/info' className='btn btn-default btn-block'>个人资料</Link>
        <Link to='/user/collections' className='btn btn-default btn-block'>我的收藏</Link>
        <Link to='/user/groups' className='btn btn-default btn-block'>我的小组</Link>
        <Link to='/user/notifications' className='btn btn-default btn-block'>我的消息</Link>
      </div>
    );
  }

  renderUserLogin() {
    return (
      <div>
        <h3>还没有登录，登录后享受更多权利!</h3>
        <Link to='/login' className='btn btn-success'>登录</Link>
        <Link to='/register' className='btn btn-success'>注册</Link>
      </div>
    );
  }

  renderUser(props) {
    if (props.isWechat) {
      return (
        <div>
          <div>
            <img url={props.avatarWechat} style={this.getStyles().avatar}></img>
            <h4 style={this.getStyles().name}>{props.nickname}</h4>
          </div>
          <div>
            { props.isAdmin ?  <Link to="/admin" className='btn btn-success'>管理员后台</Link> : <div /> }
            <Link to='/user/share' className='btn btn-success'>我的推广</Link>
          </div>
        </div>
      );
    }
    return (
      <div style={this.getStyles().user}>
        <div>
          <div style={this.getStyles().avatar}>{userAvatar(props.nickname)}</div>
          <h4 style={this.getStyles().name}>{props.nickname}</h4>
        </div>
        <div>
          { props.isAdmin ?  <Link to="/admin" className='btn btn-success'>管理员后台</Link> : <div /> }
          <Link to='#' className='btn btn-success'>我的推广</Link>
        </div>
      </div>
    );
  }

  getStyles() {
    return {
      userWrapper: {
        paddingTop: '80px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'left',
      },
      userLogin: {
        flex: '0 1 200px',
        border: '2px solid #fff',
        margin: '10px',
        padding: '20px',
        color: '#fff',
        backgroundColor: '#3E66D1',
      },
      userConf: {
        flex: '0 1 auto',
        padding: '10px',
      },
      list: {
        padding: '10px',
        margin: '10px',
        fontSize: '20px',
        color: '#000',
      },
      user: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      },
      name: {
        margin: '10px',
        padding: '10px',
      },
      avatar: {
        width: '60px',
        height: '60px',
        margin: '10px',
        lineHeight: '60px',
        fontSize: '30px',
        backgroundColor: '#999',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '50%',
        textAlign: 'center'
      }
    };
  }
}

UserCenter.propTypes = {
  loggedIn: PropTypes.bool,
  avatarWechat: PropTypes.string,
  nickname: PropTypes.string,
  isWechat: PropTypes.bool,
  isAdmin: PropTypes.bool,
};
