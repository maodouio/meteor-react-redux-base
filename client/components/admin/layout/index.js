import React from 'react';
import Nav from '../../../container/admin/layout/nav';

export default ({content = () => null }) => (
  <div>
    <Nav />
    {content()}
    <div>Footer2</div>
  </div>
);
