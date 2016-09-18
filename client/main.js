import 'bootstrap-sass';
import App from './lib/app';

import thunk from 'redux-thunk';
import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import reduxMiddleware from './lib/middlewares/redux';
import configMiddleware from '../lib/middlewares/configs';
import i18nMiddleware from './lib/middlewares/i18n';

import coreModule from './';

import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'

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

app.loadModule(coreModule);

app.init();

render(<Router history={browserHistory} routes={app.routes} />, document.getElementById('body'));
