import React from 'react';
import {mount} from 'react-mounter';
import Counter from './containers/counter';

export default function(injectDeps, {FlowRouter, mainLayout}) {
  FlowRouter.route('/counter', {
    action() {
      mount(mainLayout, {
        content: () => (<Counter />)
      });
    }
  });
}
