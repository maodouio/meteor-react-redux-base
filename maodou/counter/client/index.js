import actions from './actions';
import reducers from './reducers';
import routes from './routes';

export default {
  name: 'counter',
  actions,
  reducers,
  routes,
  init(context, actions) {
    const { configs, dispatch } = context;
    configs.counter.initialValue && dispatch(actions.counter.set(context, configs.counter.initialValue));
  }
};
