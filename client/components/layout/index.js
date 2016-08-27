import React from 'react';
import Nav from '../../container/layout/nav';

export default ({content = () => null }) => (
  <div>
    <Nav />
    {content()}
    <div>Footer</div>
  </div>
);
