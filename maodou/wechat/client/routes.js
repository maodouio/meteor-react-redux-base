import React from 'react';
import { mount } from 'react-mounter';
import WechatAdmin from './containers/admin';

export default function(injectDeps, { FlowRouter, mainLayout, adminLayout }) {
  FlowRouter.route('/admin/wechat', {
    action() {
      mount(adminLayout, {
        content: () => (<WechatAdmin />)
      });
    }
  });
}
