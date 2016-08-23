import App from './app';
import createContext from './context';
import { combineReducers } from 'redux';
import counterModule from '/maodou/counter/client';
import counterConfig from '/lib/configs/counter';

const actions = {
  ...counterModule.actions
};

const reducers =  combineReducers({
  ...counterModule.reducers
});

const context = createContext(actions, reducers);

const app = new App(context);
app.loadModule(counterModule, counterConfig);
app.init();
