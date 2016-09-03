import React from 'react';

export default (props) => (
  <aside id="menu">
    <div id="navigation">
      <ul className="nav" id="side-menu">
        {
          _.values(props.context.configs).map((config, index) => (
            <li key={index}>
              <a href={config.adminUrl} onClick={props.handleLink}>
                <span className="nav-label">{config.displayName}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  </aside>
);
