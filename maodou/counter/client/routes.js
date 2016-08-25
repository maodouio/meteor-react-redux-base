import React from 'react';
import {mount} from 'react-mounter';
import Counter from './containers/counter';

export default function(injectDeps, {FlowRouter}) {
  FlowRouter.route('/counter', {
    action() {
      mount(injectDeps(Counter));
    }
  });
}
