import publications from './publications';
import methods from './methods';
import configs from '../lib/configs';

export default {
  configs,
  publications,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'usersManage' })) {
      Collections.Packages.insert({
        name: 'usersManage',
        moduleName: '用户管理模块',
        display: true,
        configs: context.configs.usersManage || {}
      });
    }
  }
};
