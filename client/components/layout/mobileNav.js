import React, { Component } from 'react';
import {Link} from 'react-router';

export default class MobileNav extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='app-header'>
        <Link to="/" className="brand">{this.props.appName}</Link>
        <Link to="/posts/list">文章</Link>
        <Link to="/events/list">课程</Link>
        <Link to="/user">个人中心</Link>
      </div>
    );
  }
}
