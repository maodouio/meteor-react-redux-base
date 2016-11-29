import configs from '../configs';
import publications from './publications';
import privateConfigs from 'server/configs/wechat';
import methods from './methods';

// Uncomment middleware if you need to process messages and events
// import middleware from './middleware';

export default {
  configs,
  publications,
  privateConfigs,
  // middleware,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'wechat' })) {
      Collections.Packages.insert({
        name: 'wechat',
        moduleName: '微信登录模块',
        display: false,
        configs: context.configs.wechat || {},
        privateConfigs: context.privateConfigs.wechat || {}
      });
    }
  }
};
