import React from 'react';
import { mount } from 'react-mounter';
import Home from './containers/home';
import Admin from './components/admin';
import ResetPassword from './containers/users/reset-password';
import ErrorPage from './components/common/errorPage';

export default function(injectDeps, { FlowRouter, mainLayout, adminLayout }) {
  FlowRouter.route('/', {
    action() {
      mount(mainLayout, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/reset-password/:token', {
    action(params) {
      mount(mainLayout, {
        content: () => (<ResetPassword {...params} />)
      })
    }
  });

  FlowRouter.route('/admin', {
    triggersEnter: [(context, redirect) => {
      redirect('/admin/core');
    }],
  });
  FlowRouter.route('/admin/core', {
    action() {
      mount(adminLayout, {
        content: () => (<Admin />)
      });
    }
  });

  FlowRouter.notFound = {
    action() {
      mount(({content}) => <div>{content}</div>, {
        content: <ErrorPage code="404" info="Page Not Found" />
      });
    }
  };
  FlowRouter.route('/401', {
    action() {
      mount(({content}) => <div>{content}</div>, {
        content: <ErrorPage code="401" info="Unauthorized" />
      });
    }
  });
}
