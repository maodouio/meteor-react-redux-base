import configs from '../lib/configs';
import privateConfigs from './configs/core';
import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import { addInstancesCount } from 'lib/helpers/instancesHelper';

export default {
  configs,
  privateConfigs,
  collections,
  permissions,
  publications,
  methods,
  init(context) {
    const { Collections, Qiniu, privateConfigs, Meteor } = context;
    Qiniu.conf.ACCESS_KEY = privateConfigs.core.qiniu.ACCESS_KEY;
    Qiniu.conf.SECRET_KEY = privateConfigs.core.qiniu.SECRET_KEY;
    Qiniu.conf.BUCKET_NAME = privateConfigs.core.qiniu.BUCKET_NAME;
    Qiniu.conf.DOMAIN_NAME = privateConfigs.core.qiniu.DOMAIN_NAME;
    if (!Collections.Packages.findOne({ name: 'core' })) {
      Collections.Packages.insert({
        name: 'core',
        moduleName: '核心模块',
        display: true,
        configs: context.configs.core || {}
      });
    }
    if (Meteor.users.find().count() === 0) {
      const adminUser = {
        username: 'admin',
        email: 'admin@example.com',
        password: '123456',
        emails: [{ address: 'admin@example.com', verified: true }],
        profile: { nickname: 'Admin' },
      };
      const userId = Accounts.createUser(adminUser);
      context.Roles.addUsersToRoles(userId, ['admin']);
      addInstancesCount('user');
    }
  }
};
