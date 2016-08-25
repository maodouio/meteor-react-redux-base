import {createApp} from 'mantra-plus';

import createContext from './context';
import reduxMiddleware from './redux-middleware';
import configMiddleware from './config-middleware';
import counterModule from '/maodou/counter/client';

const context = createContext();
const app = createApp(context);

app.loadMiddlewares([
  reduxMiddleware({}),
  configMiddleware,
]);
app.loadModule(counterModule);
app.init();
