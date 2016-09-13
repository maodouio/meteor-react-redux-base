import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import configs from 'lib/configs/events';
import privateConfigs from 'server/configs/events';

export default {
  configs,
  privateConfigs,
  collections,
  permissions,
  publications,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'events' })) {
      Collections.Packages.insert({
        name: 'events',
        configs: context.configs.events || {}
      });
    }
  }
};
