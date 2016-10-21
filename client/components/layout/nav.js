import React from 'react';
import {Link} from 'react-router';

export default (props) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">{props.appName}</Link>
      </div>
      <div id="navbar" className="navbar-collapse navbar-left collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/posts">新闻</Link></li>
          <li><Link to="/events">活动</Link></li>
          <li><Link to="/admin">管理员后台</Link></li>
        </ul>
      </div>
      <ul className="nav navbar-nav navbar-right hidden-xs">
        <li className="dropdown">
          <a className="dropdown-toggle" id="drop1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Language <span className="caret" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="drop1">
            <li><a href="#" onClick={(e) => props.setLang(e, 'enUS')}>English</a></li>
            <li><a href="#" onClick={(e) => props.setLang(e, 'zhCN')}>中文</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
);
