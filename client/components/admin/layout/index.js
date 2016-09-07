import React from 'react';
import Nav from '../../../containers/admin/layout/nav';
import Aside from '../../../containers/admin/layout/aside';

export default (props) => (
  <div className="admin">
    <Nav />
    <Aside />
    <div id="wrapper" style={{marginTop: '56px'}}>
      {props.children}
      {/*<div className="footer"></div>*/}
    </div>
  </div>
);
