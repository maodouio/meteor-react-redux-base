import UserCenter from './containers/userCenter';
import UserInfo from './containers/userInfo';
import MemberInfo from './components/memberInfo';
import UserCollections from './components/userCollections';
import UserGroups from './components/userGroups';
import UserNotifications from './components/userNotifications';
import UserShare from './components/userShare';

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': ['usersManage'],

    '/': [
      {path: 'user', component: UserCenter},
      {path: 'user/info', component: UserInfo},
      {path: 'user/vip', component: MemberInfo},
      {path: 'user/collections', component: UserCollections},
      {path: 'user/groups', component: UserGroups},
      {path: 'user/notifications', component: UserNotifications},
      {path: 'user/share', component: UserShare}
    ]
  };

  return routes;
}
