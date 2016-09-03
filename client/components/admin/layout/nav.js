import React from 'react';

export default (props) => (
  <div>
    <div className="color-line">
    </div>
    <div id="logo" className="light-version">
        <span>
            Homer Theme
        </span>
    </div>
    <nav role="navigation">
      <a href="#" className="header-link hide-menu" onClick={(e) => props.sidebar(e)}><i className="fa fa-bars" /></a>
      <div className="small-logo">
        <span className="text-primary">HOMER APP</span>
      </div>
      <div className="mobile-menu">
        <button type="button" className="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
          <i className="fa fa-chevron-down" />
        </button>
        <div className="collapse mobile-navbar" id="mobile-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a className="" >Login</a>
            </li>
            <li>
              <a className="" >Logout</a>
            </li>
            <li>
              <a className="" href="/">Main Site</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <a href="/" className="btn btn-info" style={{margin: '10px 20px'}}>Main Site <i className="pe-7s-upload pe-rotate-90" /></a>
      </div>
    </nav>
  </div>
);
