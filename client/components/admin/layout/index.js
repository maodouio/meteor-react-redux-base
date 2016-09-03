import React from 'react';
import Nav from '../../../containers/admin/layout/nav';
import Aside from '../../../containers/admin/layout/aside';

export default ({content = () => null }) => (
  <div className="admin">
    <Nav />
    <Aside />
    <div id="wrapper" style={{marginTop: '56px'}}>
      {content()}
      <div className="footer">footer</div>
    </div>
  </div>
);
