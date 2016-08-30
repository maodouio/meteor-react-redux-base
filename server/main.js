import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import configMiddleware from '../lib/middlewares/configs';
import coreModule from './';
import postsModule from '/maodou/posts/server';
import wechatModule from '/maodou/wechat/server';

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  configMiddleware
]);

app.loadModule(coreModule);
app.loadModule(postsModule);
app.loadModule(wechatModule);

app.init();
