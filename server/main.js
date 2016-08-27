import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from './middlewares/collections';
import configMiddleware from './middlewares/configs';
import coreModule from './';
import postsModule from '/maodou/posts/server';

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  configMiddleware
]);

app.loadModule(coreModule);
app.loadModule(postsModule);

app.init();
