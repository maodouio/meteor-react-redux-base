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
      const ownerUser = {
        username: 'owner',
        password: '123456',
        profile: { nickname: 'owner', loginMethod: 'WEB', phoneNumber: '123 4567 8910' },
      };
      const ownerId = Accounts.createUser(ownerUser);
      context.Roles.addUsersToRoles(ownerId, ['owner']);
      addInstancesCount('user');
    }
  }
};
