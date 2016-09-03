import React from 'react';
import Nav from '../../containers/layout/nav';
import Footer from './footer';

export default ({content = () => null }) => (
  <div className="landing-page">
    <Nav />
    {content()}
    <Footer />
  </div>
);
