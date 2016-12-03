import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {
  render(){
    return(
      <div className="app-footer">
        <Link to="/posts/list"><i className="fa fa-file-text"></i>文章</Link>
        <Link to="/events/list"><i className="fa fa-play-circle"></i>课程</Link>
        <Link to="/user"><i className="fa fa-user"></i>我的</Link>
      </div>
    );
  }
}
