import App from './lib/app';
import React from 'react';
import thunk from 'redux-thunk';
import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import reduxMiddleware from './lib/middlewares/redux';
import configMiddleware from '../lib/middlewares/configs';
import i18nMiddleware from './lib/middlewares/i18n';

import coreModule from './';
import postsModule from 'maodou/posts/client';
import eventsModule from 'maodou/events/client';
import wechatModule from 'maodou/wechat/client';
import bizplansModule from 'maodou/bizplans/client';
import customersModule from 'maodou/customers/client';
import singlePagesModule from 'maodou/singlePages/client';
import usersManageModule from 'maodou/usersManage/client';

import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import Packages  from '../lib/collections/packages';

const context = createContext();
export const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  reduxMiddleware({
    middlewares: [thunk]
  }),
  configMiddleware,
  i18nMiddleware(['enUS', 'zhCN'])
]);

// var subscription = Meteor.subscribe('packages.list');
// app.loadModule(coreModule);
// Tracker.autorun(() => {
//   if (subscription.ready()) {
//     const modules = Packages.find({ display: true, name: {$ne: 'core'} }, { fields: { 'name': 1 } }).fetch();
//     console.log(modules);
//     for (const module of modules) {
//       if (module.name === 'posts') {
//         app.loadModule(postsModule);
//       } else if (module.name === 'events') {
//         app.loadModule(eventsModule);
//       } else if (module.name === 'singlePages') {
//         app.loadModule(singlePagesModule);
//       } else if (module.name === 'customers') {
//         app.loadModule(customersModule);
//       } else if (module.name === 'bizplans') {
//         app.loadModule(bizplansModule);
//       } else if (module.name === 'wechat') {
//         app.loadModule(wechatModule);
//       } else if (module.name === 'usersManage') {
//         app.loadModule(usersManageModule);
//       } else {
//         console.log(`模块${module.name}需要加入到main.js文件中`);
//       }
//     }
//     app.init();
//     render(<Router history={browserHistory} routes={app.routes} />, document.getElementById('body'));
//   }
// });

app.loadModule(coreModule);
app.loadModule(wechatModule);
app.loadModule(postsModule);
app.loadModule(eventsModule);
app.loadModule(usersManageModule);
app.init();
render(<Router history={browserHistory} routes={app.routes} />, document.getElementById('body'));



