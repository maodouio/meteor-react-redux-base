import configs from '../lib/configs';
import privateConfigs from './configs/core';
import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';

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
        configs: context.configs.core || {}
      });
    }
    if (Meteor.users.find().count() === 0) {
      const ownerUser = {
        username: 'owner',
        email: 'owner@example.com',
        password: '123456',
        emails: [{ address: 'owner@example.com', verified: true }],
        profile: { nickname: 'owner' },
      };
      const ownerId = Accounts.createUser(ownerUser);
      context.Roles.addUsersToRoles(ownerId, ['owner', 'admin', 'member', 'user']);
      const adminUser = {
        username: 'admin',
        email: 'admin@example.com',
        password: '123456',
        emails: [{ address: 'admin@example.com', verified: true }],
        profile: { nickname: 'admin' },
      };
      const adminId = Accounts.createUser(adminUser);
      context.Roles.addUsersToRoles(adminId, ['admin', 'member', 'user']);
      const memberUser = {
        username: 'member',
        email: 'member@example.com',
        password: '123456',
        emails: [{ address: 'member@example.com', verified: true }],
        profile: { nickname: 'member' },
      };
      const memberId = Accounts.createUser(memberUser);
      context.Roles.addUsersToRoles(memberId, ['member', 'user']);
      const userUser = {
        username: 'user',
        email: 'user@example.com',
        password: '123456',
        emails: [{ address: 'user@example.com', verified: true }],
        profile: { nickname: 'user' },
      };
      const userId = Accounts.createUser(userUser);
      context.Roles.addUsersToRoles(userId, ['user']);

    }
  }
};
