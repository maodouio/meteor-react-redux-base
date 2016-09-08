import configs from '../lib/configs/core';
import i18n from 'lib/configs/core/i18n';
import collections from '../lib/collections';
import actions from './actions';
import reducers from './reducers';

export default {
  configs,
  i18n,
  collections,
  actions,
  reducers,
  init(context, actions) {
    // console.log(context);
  }
};
