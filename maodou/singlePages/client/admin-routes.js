import SinglePagesAdmin from './components/admin';
import SinglePagesList from './containers/admin/singlePagesList';
import SinglePagesConf from './containers/admin/singlePagesConf';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'singlePages', component: SinglePagesAdmin, childRoutes: []}
  ];

  const subMenu = configs.singlePages.subMenu;
  const subMenuComponents = [
    SinglePagesList,
    SinglePagesConf
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}
