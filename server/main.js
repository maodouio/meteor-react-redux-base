import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import configMiddleware from '../lib/middlewares/configs';
import middlewareMiddleware from './lib/middlewares/middleware';
import coreModule from './';
import postsModule from 'maodou/posts/server';
import eventsModule from 'maodou/events/server';
import wechatModule from 'maodou/wechat/server';
import bizplansModule from 'maodou/bizplans/server';
import customersModule from 'maodou/customers/server';
import singlePagesModule from 'maodou/singlePages/server';
// import USzhejiang from 'maodou/USzhejiang/server';


//系统变量MAIL_URL配置，暂时放在这里
process.env.MAIL_URL = Meteor.settings.mailUrl;

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  configMiddleware,
  middlewareMiddleware
]);

app.loadModule(coreModule);
app.loadModule(wechatModule);
app.loadModule(postsModule);
app.loadModule(eventsModule);
app.loadModule(bizplansModule);
app.loadModule(customersModule);
app.loadModule(singlePagesModule);
// app.loadModule(USzhejiang);

app.init();
