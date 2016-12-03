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
        <Link to='/user/vip' className='btn btn-default btn-block'><i className="fa fa-user" style={this.getStyles().iconLeft}></i>会员中心<i className="fa fa-arrow-right" style={this.getStyles().icon}></i></Link>
        <Link to='/user/info' className='btn btn-default btn-block'><i className="fa fa-book" style={this.getStyles().iconLeft}></i>个人资料<i className="fa fa-arrow-right" style={this.getStyles().icon}></i></Link>
        <Link to='/user/collections' className='btn btn-default btn-block'><i className="fa fa-heart" style={this.getStyles().iconLeft}></i>我的收藏<i className="fa fa-arrow-right" style={this.getStyles().icon}></i></Link>
        <Link to='/user/groups' className='btn btn-default btn-block'><i className="fa fa-group" style={this.getStyles().iconLeft}></i>我的小组<i className="fa fa-arrow-right" style={this.getStyles().icon}></i></Link>
        <Link to='/user/notifications' className='btn btn-default btn-block'><i className="fa fa-bell" style={this.getStyles().iconLeft}></i>我的消息<i className="fa fa-arrow-right" style={this.getStyles().icon}></i></Link>
      </div>
    );
  }

  renderUserLogin() {
    return (
      <div style={this.getStyles().notLogin}>
        <h3>未登录，请先登录！</h3>
        <Link to='/login' className='btn btn-success'>登录</Link>
        <Link to='/register' className='btn btn-success'>注册</Link>
      </div>
    );
  }

  renderUser(props) {
    if (props.isWechat) {
      return (
        <div>
          <div style={this.getStyles().userInfo}>
            <img url={props.avatarWechat} style={this.getStyles().wechatAvatar}></img>
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
        <div style={this.getStyles().userInfo}>
          <div style={this.getStyles().avatar}>{userAvatar(props.nickname)}</div>
          <h4 style={this.getStyles().name}>{props.nickname}</h4>
        </div>
        <div>
          { props.isAdmin ?  <Link to="/admin" className='btn btn-success'>管理员后台</Link> : <div /> }
          <Link to='/user/share' className='btn btn-success'>我的推广</Link>
        </div>
      </div>
    );
  }

  getStyles() {
    return {
      userWrapper: {
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
      notLogin: {
        textAlign: 'center',
        marginTop: '20px',
        padding: '20px',
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
      icon: {
        float: 'right',
        marginRight: '10px',
      },
      iconLeft: {
        marginRight: '5px',
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
      userInfo: {
        flexFlow: 'column wrap',
        display: 'flex',
        alignItems: 'center',
      },
      avatar: {
        width: '60px',
        height: '60px',
        lineHeight: '60px',
        fontSize: '30px',
        backgroundColor: '#999',
        color: '#fff',
        borderRadius: '50%',
        border: '2px solid #fff',
        textAlign: 'center'
      },
      wechatAvatar: {
        width: '60px',
        height: '60px',
        lineHeight: '60px',
        borderRadius: '50%',
        border: '2px solid #fff',
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
