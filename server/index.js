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
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'core' })) {
      Collections.Packages.insert({
        name: 'core',
        configs: context.configs.core || {}
      });
    }
  }
};
