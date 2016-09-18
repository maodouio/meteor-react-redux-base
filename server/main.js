import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import configMiddleware from '../lib/middlewares/configs';
import middlewareMiddleware from './lib/middlewares/middleware';
import coreModule from './';

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  configMiddleware,
  middlewareMiddleware
]);

app.loadModule(coreModule);

app.init();
