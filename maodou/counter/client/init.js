import React from 'react';
import {mount} from 'react-mounter';

import injectReduxStore from '/client/lib/inject-redux-store';
import Counter from './containers/counter';

export default function(config, injectDeps, context, actions) {
  const {FlowRouter, ReduxStore} = context;
  config.initialValue && ReduxStore.dispatch(actions.counter.set(config.initialValue));

  FlowRouter.route('/counter', {
    action() {
      mount(injectReduxStore(injectDeps, Counter));
    }
  });
}
