import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from './middlewares/collections';
import layoutsMiddleware from './middlewares/layouts';
import reduxMiddleware from './middlewares/redux';
import configMiddleware from './middlewares/configs';
import Layout from './core/components/layout';
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

app.loadModule(counterModule);
app.loadModule(postsModule);

app.init();
