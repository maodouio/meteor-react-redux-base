import UsersAdmin from './components/admin';
import UsersList from './components/admin/usersList';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'users/list', component: UsersAdmin, childRoutes:[]},
  ];

  const subMenu = configs.users.subMenu;
  const subMenuComponents = [
    UsersList,
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}

