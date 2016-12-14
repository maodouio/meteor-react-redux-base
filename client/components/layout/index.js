import React from 'react';
import Nav from '../../containers/layout/nav';
import Footer from '../../containers/layout/footer';

export default (props) => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);
