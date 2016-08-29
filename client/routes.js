import React from 'react';
import { mount } from 'react-mounter';
import Home from './components/home';
import Admin from './components/admin';

export default function(injectDeps, { FlowRouter, mainLayout, adminLayout }) {
  FlowRouter.route('/', {
    action() {
      mount(mainLayout, {
        content: () => (<Home />)
      });
    }
  });
  FlowRouter.route('/admin', {
    action() {
      mount(adminLayout, {
        content: () => (<Admin />)
      });
    }
  });
}
