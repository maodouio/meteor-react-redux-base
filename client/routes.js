import React from 'react';
import { mount } from 'react-mounter';
import Home from './components/home';

export default function(injectDeps, { FlowRouter, Layout }) {
  FlowRouter.route('/', {
    action() {
      mount(Layout, {
        content: () => (<Home />)
      });
    }
  });
}
