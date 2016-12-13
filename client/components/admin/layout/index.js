import React from 'react';
import Nav from '../../../containers/admin/layout/nav';
import Aside from '../../../containers/admin/layout/aside';
import AdminMenu from './Menu';
import Navbar from './Navbar';

export default (props) => (
  <div style={styles.container}>
    <div style={styles.left}><AdminMenu /></div>
    <div style={styles.right}>
      <div style={styles.navbar}><Navbar /></div>
      <div style={styles.content}>{props.children}</div>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
  },
  left: {
    width: '220px',
    height: '100vh',
  },
  right: {
    width: 'calc(100vh - 220px)',
    flex: '1 1 auto',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  navbar: {
    flex: '1 1 auto',
    height: '60px',
  },
  content: {
    flex: '1 1 auto',
    overflowY: 'scroll',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    height: 'calc(100vh - 60px)',
    borderTop: '5px solid #108ee9',
  }
};
