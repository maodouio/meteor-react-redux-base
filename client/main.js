import App from './app';
import createContext from './context';

import counterModule from '/maodou/counter/client';
import counterConfig from '/lib/configs/counter';

const app = new App(createContext());
app.loadModule(counterModule, counterConfig);
app.init();
