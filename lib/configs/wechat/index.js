export default {
  wechat: {
    adminLabel: '微信配置',
    adminHref: '/admin/wechat',
    appId: Meteor.settings.public.wechat.appId || 'xxx'
  }
};
