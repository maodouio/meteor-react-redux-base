import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class AdminMenu extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const styles = this.getStyles();
    return(
      <Menu
        style={styles.menu}
        mode='horizontal'
      >
        <Menu.Item key='1'><Icon type='setting' />路由名称</Menu.Item>
        <Menu.Item key='2'><Icon type='setting' />用户指引</Menu.Item>
        <Menu.Item key='4'><Icon type='setting' />用户名</Menu.Item>
        <Menu.Item key='5'><Icon type='setting' />退出</Menu.Item>
      </Menu>
    );
  }

  getStyles(){
    return ({
      menu: {
        height: '60px',
        lineHeight: '60px',
        fontSize: '20px',
        textAlign: 'center',
        float: 'right'
      },
    });
  }
}
