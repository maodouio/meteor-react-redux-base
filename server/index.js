import configs from 'lib/configs/core';
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
    const { Collections, Qiniu, privateConfigs } = context;
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
  }
};
