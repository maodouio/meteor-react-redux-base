import React from 'react';
import {mount} from 'react-mounter';
import Counter from './containers/counter';

export default function(config, injectDeps, context) {
  const {FlowRouter, Actions, Store, MainLayout} = context;
  config.initialValue && Store.dispatch(Actions.counter.set(config.initialValue));

  FlowRouter.route('/counter', {
    action() {
      mount(MainLayout, {content: () => <Counter actions={Actions} />});
    }
  });
}
