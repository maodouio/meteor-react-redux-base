import eCollections from 'maodou/events/lib/collections';
import pCollections from 'maodou/bizplans/lib/collections';
// import permissions from './permissions';
// import publications from './publications';
// import methods from './methods';
import configs from '../lib/configs';
// import privateConfigs from './config';

export default {
  configs,
  // privateConfigs,
  eCollections,
  pCollections,
  // permissions,
  // publications,
  // methods,
  init (context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'USzhejiang' })) {
      Collections.Packages.insert({
        name: 'USzhejiang',
        configs: context.configs.USzhejiang  || {}
      });
    }
  }
};
