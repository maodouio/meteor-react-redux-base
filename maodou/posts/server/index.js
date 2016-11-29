import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import configs from '../lib/configs';
import privateConfigs from 'server/configs/posts';
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
    if (!Collections.Packages.findOne({ name: 'posts' })) {
      Collections.Packages.insert({
        name: 'posts',
        moduleName: '文章模块',
        display: true,
        configs: context.configs.posts || {}
      });
    }
    if (Collections.Posts.find().count() < seeds.data.length) {
      for (let i = 0; i < seeds.data.length; i++) {
        Collections.Posts.insert(seeds.data[i]);
      }
    }
  }
};
