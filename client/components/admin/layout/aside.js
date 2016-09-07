import React from 'react';
import {Link} from 'react-router';

export default (props) => (
  <aside id="menu">
    <div id="navigation">
      <ul className="nav" id="side-menu">
        {
          _.values(props.context.configs).map((config, index) => (
            <li key={index}>
              <Link to={config.adminHref || ''} onClick={!config.subMenu ? props.handleLink : null}>
                <span className="nav-label">{config.adminLabel}</span>
                {config.subMenu ? <i className="fa arrow" /> : <span />}
              </Link>
              {
                config.subMenu ?
                  <ul className="nav nav-second-level collapse">
                    {
                      config.subMenu.map((menu, index) =>
                        <li key={index}><Link to={menu.href} onClick={props.handleLink}>{menu.label}</Link></li>
                      )
                    }
                  </ul> :
                  <span />
              }
            </li>
          ))
        }
      </ul>
    </div>
  </aside>
);
