import WechatAdmin from './containers/admin';

export default function (injectDeps, { configs }) {
  return [{path: 'wechat', component: WechatAdmin}];
}
