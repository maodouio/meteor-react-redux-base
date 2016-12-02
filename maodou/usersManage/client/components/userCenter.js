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
      <div className='container' style={{paddingTop: '80px'}}>
        { loggedIn ? <h4>欢迎，{nickname}</h4> : <span />}
        { isWechat ? <img url={avatarWechat} style={styles.avatar}></img> : <div style={styles.avatar}>{userAvatar(nickname)}</div>}
        <p>个人收藏</p>
        <p>浏览记录</p>
        <p>会员中心</p>
        <Link to='/user/info' className='btn btn-success'>个人资料</Link>
      </div>
    );
  }

  getStyles() {
    return {
      avatar: {
        width: '50px',
        height: '50px',
        margin: '10px',
        lineHeight: '50px',
        fontSize: '30px',
        backgroundColor: '#888',
        color: '#fff',
        border: '2px solid #f44',
        borderRadius: '50%',
        textAlign: 'center'
      }
    };
  }
}


