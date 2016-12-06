import UsersAdmin from './components/admin';
import UsersList from './containers/admin/usersList';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'usersManage', component: UsersAdmin, childRoutes:[]},
  ];

  const subMenu = configs.usersManage.subMenu;
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

