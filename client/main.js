import {createApp} from 'mantra-plus';

import createContext from './context';
import layoutsMiddleware from './layout-middleware';
import reduxMiddleware from './redux-middleware';
import configMiddleware from './config-middleware';
import Layout from './core/components/layout';
import counterModule from '/maodou/counter/client';

const context = createContext();
const app = createApp(context);

app.loadMiddlewares([
  layoutsMiddleware(Layout),
  reduxMiddleware({}),
  configMiddleware
]);
app.loadModule(counterModule);
app.init();
