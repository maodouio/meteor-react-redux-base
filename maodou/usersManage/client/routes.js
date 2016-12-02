import UserCenter from './containers/userCenter';
import UserInfo from './components/userInfo';

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': ['usersManage'],

    '/': [
      {path: 'user', component: UserCenter},
      {path: 'user/info', component: UserInfo}
    ]
  };

  return routes;
}
