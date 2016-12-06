import UsersAdmin from './components/admin';
import UsersList from './containers/admin/usersList';
import AdminManage from './containers/admin/adminManage';
import MemberManage from './containers/admin/memberManage';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'usersManage', component: UsersAdmin, childRoutes:[]},
  ];

  const subMenu = configs.usersManage.subMenu;
  const subMenuComponents = [
    UsersList,
    AdminManage,
    MemberManage
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}

