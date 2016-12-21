import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, browserHistory } from 'react-router';

export default class AdminMenu extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch(e.key) {
      case '0':
        browserHistory.push('/');
        return;
      case '1':
        browserHistory.push('/admin/core');
        return;
      case '2':
        browserHistory.push('/admin/wechat');
        return;
      // case '3':
      //   browserHistory.push('/admin/posts/configure');
      //   return;
      case '4':
        browserHistory.push('/admin/posts/list');
        return;
      case '5':
        browserHistory.push('/admin/post/add');
        return;
      case '6':
        browserHistory.push('/admin/events/list');
        return;
      case '7':
        browserHistory.push('/admin/event/add');
        return;
      case '8':
        browserHistory.push('/admin/users/list');
        return;
      case '9':
        browserHistory.push('/admin/users/member');
        return;
      case '10':
        browserHistory.push('/admin/users/applyingmember');
        return;
      default:
        browserHistory.push('/admin/core');
    }
  }

  render() {
    const styles = this.getStyles();
    return(
      <Menu onClick={this.handleClick}
        theme='dark'
        style={styles.menu}
        mode='inline'
      >
        <Menu.Item key='0' style={styles.subMenu1}><Icon type='home' />{this.props.appName}</Menu.Item>
        <Menu.Item key='1' style={styles.subMenu}><Icon type='setting' />核心配置</Menu.Item>
        <Menu.Item key='2' style={styles.subMenu}><Icon type='lock' />微信配置</Menu.Item>

        <Menu.Divider />
        <Menu.Item key='4' style={styles.subMenu}><Icon type='bars' />所有文章</Menu.Item>
        <Menu.Item key='5' style={styles.subMenu}><Icon type='plus-circle-o' />新建文章</Menu.Item>
        <Menu.Divider />
        <Menu.Item key='6' style={styles.subMenu}><Icon type='bars' />所有活动</Menu.Item>
        <Menu.Item key='7' style={styles.subMenu}><Icon type='plus-circle-o' />新建活动</Menu.Item>
        <Menu.Divider />
        <Menu.Item key='8' style={styles.subMenu}><Icon type='bars' />所有用户</Menu.Item>
        <Menu.Item key='9' style={styles.subMenu}><Icon type='user' />会员管理</Menu.Item>
        <Menu.Item key='10' style={styles.subMenu}><Icon type='user' />待通过会员管理</Menu.Item>
      </Menu>
    );
  }

  getStyles(){
    return ({
      menu: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
      },
      subMenu: {
        fontSize: '16px',
        height: '50px',
        lineHeight: '50px',
      },
      subMenu1: {
        fontSize: '16px',
        height: '100px',
        lineHeight: '100px',
      }
    });
  }
}
