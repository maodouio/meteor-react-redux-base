import React from 'react';
import { NavBar, Icon } from 'antd-mobile/dist/antd-mobile';
// TODO：ellipsis 按钮做成功能按钮
export default (props) => (
  <NavBar
    style={{position: 'fixed', top: 0, width: '100%', zIndex: 1}}
    leftContent="返回"
    mode="light"
    onLeftClick={() => window.history.back()}
  >{props.appName}</NavBar>
);
