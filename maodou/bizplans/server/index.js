import collections from '../lib/collections';
// import permissions from './permissions'
import publications from './publications';
import methods from './methods';
import configs from '../lib/config';
// import privateConfigs from 'server/configs/posts'

export default {
  configs,
  // privateConfigs,
  collections,
  // permissions,
  publications,
  methods,
  init (context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'bizplans' })) {
      Collections.Packages.insert({
        name: 'bizplans',
        moduleName: '项目模块',
        display: false,
        configs: context.configs.bizplans || {}
      });
    }
  }
};
