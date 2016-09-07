import React from 'react';
import {Link} from 'react-router';

export default (props) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">My App</Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
