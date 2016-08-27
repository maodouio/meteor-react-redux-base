import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import layoutsMiddleware from './lib/middlewares/layouts';
import reduxMiddleware from './lib/middlewares/redux';
import configMiddleware from '../lib/middlewares/configs';
import Layout from './components/layout';
import coreModule from './';
import counterModule from '/maodou/counter/client';
import postsModule from '/maodou/posts/client';

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  layoutsMiddleware(Layout),
  reduxMiddleware({}),
  configMiddleware
]);

app.loadModule(coreModule);
app.loadModule(counterModule);
app.loadModule(postsModule);

app.init();
