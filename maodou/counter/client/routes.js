import React from 'react';
import {mount} from 'react-mounter';
import Counter from './containers/counter';

export default function(injectDeps, {FlowRouter, Layout}) {
  FlowRouter.route('/counter', {
    action() {
      mount(Layout, {
        content: () => (<Counter />)
      });
    }
  });
}
