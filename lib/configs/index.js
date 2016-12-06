export default {
  core: {
    adminLabel: '核心配置',
    adminHref: '/admin/core',
    appName: Meteor.settings.public.core.appName || 'myApp',
    appLogo: Meteor.settings.public.core.appLogo || '/images/logo.png',
    ownerEmail: Meteor.settings.public.core.ownerEmail || 'app@example.com',
    i18n: false,
    languages: ['enUS'],
    loginMethod: 'wechat',
    qiniu: {
      BUCKET_NAME: "maodou-base",
      DOMAIN_NAME: "http://og0f8itra.bkt.clouddn.com/"
    }
  },
  permission: {
    adminLabel: '权限管理',
    // adminHref: '/admin/manage',
    subMenu: [
      { label: '管理员分配', href: '/admin/adminManage' },
      { label: '会员管理', href: '/admin/memberManage' },
    ]
  }
};
