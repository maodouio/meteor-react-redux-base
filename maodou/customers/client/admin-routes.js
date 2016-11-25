import CustomersAdmin from './components/admin';
import CustomersList from './containers/admin/customersList';
import CustomersAdd from './containers/admin/customersAdd';
import CustomersEdit from './containers/admin/customersEdit';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'customers', component: CustomersAdmin, childRoutes:[]},
    {path: 'customers/edit/:id', component: CustomersEdit, childRoutes:[]}
  ];

  const subMenu = configs.customers.subMenu;
  const subMenuComponents = [
    CustomersList,
    CustomersAdd
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}
