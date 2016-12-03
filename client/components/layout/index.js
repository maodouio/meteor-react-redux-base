import React from 'react';
import Nav from '../../containers/layout/nav';
import NavWrapper from './navWrapper';
// import Footer from './footer';

export default (props) => (
  <div className="landing-page">
    <Nav />
    {props.children}
    {/*<Footer />*/}
  </div>
);
