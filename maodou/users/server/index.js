import publications from './publications';
import methods from './methods';
import configs from '../lib/configs';

export default {
  configs,
  publications,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'users' })) {
      Collections.Packages.insert({
        name: 'users',
        moduleName: '用户管理模块',
        display: false,
        configs: context.configs.users || {}
      });
    }
  }
};
