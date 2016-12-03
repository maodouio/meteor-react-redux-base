import React, { Component } from 'react';
import Nav from '../../containers/layout/nav';
import MobileNav from './mobileNav';

export default class NavWrapper extends Component {
  constructor(props){
    super(props);
    this.state={
      renderNavBar: false,
    };
  }

  componentWillMount() {
    let setNavbarState = () => {
      this.setState({renderNavBar: window.innerWidth > 780});
    };
    setNavbarState();
    window.onresize = setNavbarState;
  }
  render() {
    const {renderNavBar} = this.state;
    return(
      renderNavBar ? <Nav /> : <MobileNav />
    );
  }
}
