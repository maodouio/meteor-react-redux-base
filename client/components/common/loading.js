import React from 'react';

export default () => (
  <div className="splash">
    <div className="splash-title">
      <h1>Loading...</h1>
      {/*<p>some loading descriptions</p>*/}
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    </div>
  </div>
);
