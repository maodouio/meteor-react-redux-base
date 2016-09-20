import React from 'react';
import { mount } from 'react-mounter';
import _ from 'lodash';
import Home from './containers/home';
import ResetPassword from './containers/users/reset-password';
import ErrorPage from './components/common/errorPage';
import Layout from './containers/layout';
import AdminLayout from './containers/admin/layout';
import Register from './containers/users/register';

export default function (routes, injectDeps, context) {

  const aggregate = routes.reduce((aggr, moduleRoutes) => ({
    '/admin': moduleRoutes['/admin'] ? aggr['/admin'].concat(moduleRoutes['/admin']) : aggr['/admin'],
    '/': moduleRoutes['/'] ? aggr['/'].concat(moduleRoutes['/']) : aggr['/']
  }), {'/admin': [], '/': []});

  return [{
      path: '/admin',
      component: injectDeps(AdminLayout),
      indexRoute: { onEnter: (nextState, replace) => replace('/admin/core') },

      getChildRoutes(nextState, cb) {
        require.ensure([], (require) => {
          let routes = [{path: 'core', component: require('./containers/admin')}];

          routes = routes.concat(_.flatten(aggregate['/admin'].map(module =>
            require.context('../maodou', true, /^.*admin-routes$/)(`./${module}/client/admin-routes`)(injectDeps, context)
          )));

          routes.push({path: '*', component: () => <ErrorPage code="404" info="Page Not Found" />});
          cb(null, routes);
        })
      }
    },
    {
      path: '/',
      component: injectDeps(Layout),
      indexRoute: {component: Home},
      childRoutes: [
        { path: '/register', component: () => <Register /> },
        {path: '401', component: () => <ErrorPage code="401" info="Unauthorized" />},
        {path: 'reset-password/:token', component: () => <ResetPassword />},
        ...aggregate['/'],
        {path: '*', component: () => <ErrorPage code="404" info="Page Not Found" />}
      ]
    }
  ];
}
