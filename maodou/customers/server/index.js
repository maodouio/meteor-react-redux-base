import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import configs from '../lib/configs';
import privateConfigs from './config';

export default {
  configs,
  privateConfigs,
  collections,
  permissions,
  publications,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'customers' })) {
      Collections.Packages.insert({
        name: 'customers',
        configs: context.configs.customers || {}
      });
    }
    if (Collections.Customers.find().count() < 2) {
      Collections.Customers.insert({
        index: 1,
        title: 'CRM项目重构',
        category: 'A类，产品直接客户',
        salesName: 'Shann',
        customerName: 'CEO',
        desc: '对已有的基于blaze的CRM项目进行重构，整合的meteor-react-redux-base的模版中，扩展数据库，扩展筛选功能。',
        schedule: '60% 已经收到首款，正在开发',
        money: 54321,
        author: 'Admin'
      });
      Collections.Customers.insert({
        index: 2,
        title: '直播网站',
        category: 'A类，产品直接客户'	,
        salesName: '李四',
        customerName: '张三',
        desc: '王二麻子家的小淘气要开直播',
        schedule: '10% 已经建立联系，正在讨论项目需求',
        money: 12345,
        author: 'Admin'
      });
    }
  }
};
