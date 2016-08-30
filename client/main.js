import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import layoutsMiddleware from './lib/middlewares/layouts';
import reduxMiddleware from './lib/middlewares/redux';
import configMiddleware from '../lib/middlewares/configs';
import Layout from './components/layout';
import adminLayout from './components/admin/layout';
import coreModule from './';
import counterModule from '/maodou/counter/client';
import postsModule from '/maodou/posts/client';
import wechatModule from '/maodou/wechat/client';

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  layoutsMiddleware([
    { name: 'mainLayout', component: Layout },
    { name: 'adminLayout', component: adminLayout }
  ]),
  reduxMiddleware({}),
  configMiddleware
]);

app.loadModule(coreModule);
app.loadModule(counterModule);
app.loadModule(postsModule);
app.loadModule(wechatModule);

app.init();
