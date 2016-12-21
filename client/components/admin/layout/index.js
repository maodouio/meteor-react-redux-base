import React from 'react';
import Navbar from '../../../containers/admin/layout/Navbar';
import AdminMenu from '../../../containers/admin/layout/Menu';

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
    width: '200px',
    height: '100vh',
  },
  right: {
    width: 'calc(100vh - 200px)',
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
