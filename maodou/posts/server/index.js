import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import configs from 'lib/configs/posts';
import privateConfigs from 'server/configs/posts';

export default {
  configs,
  privateConfigs,
  collections,
  permissions,
  publications,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'posts' })) {
      Collections.Packages.insert({
        name: 'posts',
        configs: context.configs.posts || {}
      });
    }
  }
};
