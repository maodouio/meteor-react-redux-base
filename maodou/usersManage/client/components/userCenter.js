import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class UserCenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h1 style={{paddingTop: '100px'}}>user center</h1>
        <p>个人收藏</p>
        <p>浏览记录</p>
        <p>会员中心</p>
        <Link to='/user/info' className='btn btn-success'>个人资料</Link>
      </div>
    );
  }
}
