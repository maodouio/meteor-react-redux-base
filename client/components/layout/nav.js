import React from 'react';

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
        <a href="/" className="navbar-brand">My App</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <li><a href="/posts">Posts</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
