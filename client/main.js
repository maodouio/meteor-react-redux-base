import 'bootstrap-sass';
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

import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

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

Meteor.call('packages.list', (err, data) => {
  if (!err) {
    for (const module of data) {
      if (module.name === 'core') {
        app.loadModule(coreModule);
      } else if (module.name === 'events') {
        app.loadModule(eventsModule);
      } else if (module.name === 'posts') {
        app.loadModule(postsModule);
      } else if (module.name === 'singlePages') {
        app.loadModule(singlePagesModule);
      } else if (module.name === 'customers') {
        app.loadModule(customersModule);
      } else if (module.name === 'bizplans') {
        app.loadModule(bizplansModule);
      } else if (module.name === 'wechat') {
        app.loadModule(wechatModule);
      } else {
        console.log(`模块${module.name}需要加入到main.js文件中`);
      }
    }
    app.init();
    render(<Router history={browserHistory} routes={app.routes} />, document.getElementById('body'));
  } else {
    console.log(err);
  }
});
// app.loadModule(coreModule);
// app.loadModule(wechatModule);
// app.loadModule(postsModule);
// app.loadModule(eventsModule);
// app.loadModule(bizplansModule);
// app.loadModule(customersModule);
// app.loadModule(singlePagesModule);


