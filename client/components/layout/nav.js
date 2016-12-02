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
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          { props.isReady ? props.packages.map( (module) => renderNav(module)) : ''}
        </ul>
        {/*<ul className="nav navbar-nav navbar-right hidden-xs">
          <li className="dropdown">
            <a className="dropdown-toggle" id="drop1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Language <span className="caret" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="drop1">
              <li><a href="#" onClick={(e) => props.setLang(e, 'enUS')}>English</a></li>
              <li><a href="#" onClick={(e) => props.setLang(e, 'zhCN')}>中文</a></li>
            </ul>
          </li>
        </ul> */}
        {props.isAdmin ?
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/admin">管理员后台</Link></li>
          </ul>
           : <span />
         }
         { props.loggedIn ? renderUser(props.nickname) : renderLogin() }
      </div>
    </div>
  </nav>
);

const renderNav = (module) => {
  switch (module.name) {
    case 'posts':
      return <li key={module.name}><Link to="/posts/list">文章</Link></li>;
    case 'events':
      return <li key={module.name}><Link to="/events/list">活动</Link></li>;
    case 'bizplans':
      return <li key={module.name}><Link to="/bizplans/list">项目</Link></li>;
    case 'customers':
      return <li key={module.name}><Link to="/customers/list">客户</Link></li>;
    case 'usersManage':
      return <li key={module.name}><Link to="/user">个人中心</Link></li>;
    case 'singlePages':
      return <li key={module.name}><Link to="/main">单页面</Link></li>;
    case 'core':
      return <span key='core'></span>;
    case 'wechat':
      return <span key='wechat'></span>;
    default:
      return <span key='default'></span>;
  }
};

const renderUser = (nickname) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li><Link>欢迎，{nickname}<span className="caret" /></Link></li>
      <li><Link to="/" onClick={(e) => Meteor.logout()}>退出</Link></li>
    </ul>
  );
};

const renderLogin = () => (
  <ul className="nav navbar-nav navbar-right">
    <li><Link to="/login">登录</Link></li>
    <li><Link to="/register">注册</Link></li>
  </ul>
);
