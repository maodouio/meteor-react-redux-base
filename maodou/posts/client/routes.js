import React from 'react';
import { mount } from 'react-mounter';
import Posts from './containers/posts';

export default function(injectDeps, { FlowRouter, mainLayout }) {
  FlowRouter.route('/posts', {
    action() {
      mount(mainLayout, {
        content: () => (<Posts />)
      });
    }
  });
}
