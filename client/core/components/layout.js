import React from 'react';

export default ({content = () => null }) => (
  <div>
    <div>Nav</div>
    {content()}
    <div>Footer</div>
  </div>
);
