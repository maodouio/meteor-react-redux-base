import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';

export default class AdminMenu extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch(e.key) {
      case '1':
        return;
      case '2':
        Meteor.logout();
        browserHistory.push('/');
        return;
      default:
        browserHistory.push('/admin/core');
    }
  }

  render() {
    const styles = this.getStyles();
    return(
      <Menu onClick={this.handleClick}
        style={styles.menu}
        mode='horizontal'
      >
        <Menu.Item key='1'><Icon type='user' />{this.props.username}</Menu.Item>
        <Menu.Item key='2'><Icon type='logout' />退出</Menu.Item>
      </Menu>
    );
  }

  getStyles(){
    return ({
      menu: {
        height: '60px',
        lineHeight: '60px',
        fontSize: '16px',
        textAlign: 'center',
        float: 'right'
      },
    });
  }
}

AdminMenu.propTypes = {
  username: PropTypes.string,
};
