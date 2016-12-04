import React from 'react';
import Nav from '../../containers/layout/nav';
import MobileNav from '../../containers/layout/mobileNav';
import Footer from './footer';

export default (props) => (
  <div className="app-wrap">
    <MobileNav />
    <div className='app-content'>{props.children}</div>
    {<Footer />}
  </div>
);
