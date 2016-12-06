import collections from '../lib/collections';
import configs from '../lib/configs';
import publications from './publications';
import methods from './methods';
import templates from '../templates';

export default {
  configs,
  collections,
  publications,
  methods,
  init (context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'singlePages' })) {
      Collections.Packages.insert({
        name: 'singlePages',
        moduleName: '单页面模块',
        display: false,
        configs: context.configs.singlePages || {}
      });
    }
    templates();
  }
};
