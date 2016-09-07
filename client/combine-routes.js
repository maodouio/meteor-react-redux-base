import React from 'react';
import { mount } from 'react-mounter';
import Home from './containers/home';
import Admin from './components/admin';
import ResetPassword from './containers/users/reset-password';
import ErrorPage from './components/common/errorPage';
import Layout from './components/layout';
import AdminLayout from './components/admin/layout';

export default function (injectDeps, routes) {

  const aggregate = routes.reduce((aggr, moduleRoutes) => ({
    '/admin': moduleRoutes['/admin'] ? aggr['/admin'].concat(moduleRoutes['/admin']) : aggr['/admin'],
    '/': moduleRoutes['/'] ? aggr['/'].concat(moduleRoutes['/']) : aggr['/']
  }), {'/admin': [], '/': []});

  return [{
      path: '/admin',
      component: injectDeps(AdminLayout),
      indexRoute: { onEnter: (nextState, replace) => replace('/admin/core') },
      childRoutes: [
        {path: 'core', component: Admin},
        ...aggregate['/admin'],
        {path: '*', component: () => <ErrorPage code="404" info="Page Not Found" />}
      ]
    },
    {
      path: '/',
      component: injectDeps(Layout),
      indexRoute: {component: Home},
      childRoutes: [
        {path: '401', component: () => <ErrorPage code="401" info="Unauthorized" />},
        {path: 'reset-password/:token', component: () => <ResetPassword />},
        ...aggregate['/'],
        {path: '*', component: () => <ErrorPage code="404" info="Page Not Found" />}
      ]
    }
  ];
}
