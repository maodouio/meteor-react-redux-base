import React from 'react';
import { mount } from 'react-mounter';
import WechatAdmin from './containers/admin';

export default function() {
  return {
    '/admin': [
      {path: 'wechat', component: WechatAdmin}
    ]
  };
}
