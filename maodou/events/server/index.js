import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import configs from '../lib/configs';
import privateConfigs from 'server/configs/events';
import seeds from './seed.js';

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
    if (Collections.Events.find().count() < seeds.data.length) {
      for (let i = 0; i < seeds.data.length; i++) {
        Collections.Events.insert(seeds.data[i]);
      }
    }
  }
};
