import React from 'react';
import { mount } from 'react-mounter';
import Posts from './containers/posts';

export default function(injectDeps, { FlowRouter, Layout }) {
  FlowRouter.route('/posts', {
    action() {
      mount(Layout, {
        content: () => (<Posts />)
      });
    }
  });
}
