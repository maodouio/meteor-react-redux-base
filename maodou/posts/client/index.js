import configs from 'lib/configs/posts';
import i18n from 'lib/configs/posts/i18n';
import collections from '../lib/collections';
import actions from './actions';
import reducers from './reducers';
import routes from './routes';

export default {
  configs,
  i18n,
  collections,
  actions,
  reducers,
  routes,
  init(context, actions) {
    // console.log(context);
  }
};
