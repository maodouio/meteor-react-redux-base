import React from 'react';
import {Provider} from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createStore } from 'redux';

export default function(actions, reducers) {
  const Store = createStore(reducers, {}, window.devToolsExtension && window.devToolsExtension());
  const MainLayout = ({content = () => null }) => (
    <Provider store={Store}>
      <div className="content">
        Nav
        {content()}
        Footer
      </div>
    </Provider>
  );
  return {
    Meteor,
    FlowRouter,
    Store,
    Actions: actions,
    MainLayout
  };
};
