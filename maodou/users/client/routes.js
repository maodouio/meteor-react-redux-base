import UserInfo from './components/userinfo';

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': ['users'],

    '/': [
      {path: 'user', component: UserInfo}
    ]
  };

  return routes;
}
