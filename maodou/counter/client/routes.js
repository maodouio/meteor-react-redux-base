import React from 'react';
import {mount} from 'react-mounter';
import Counter from './containers/counter';

export default function(injectDeps, context) {
  context.FlowRouter.route('/counter', {
    action() {
      mount(context.Layout, {
        content: () => (<Counter />)
      });
    }
  });
}
