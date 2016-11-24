import EventsAdmin from './components/admin';
import EventsList from './containers/admin/eventsList';
import EventsAdd from './containers/admin/eventsAdd';
import EventsEdit from './containers/admin/eventsEdit';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'events', component: EventsAdmin, childRoutes:[]},
    {path: 'events/edit/:id', component: EventsEdit, childRoutes:[]}
  ];

  const subMenu = configs.events.subMenu;
  const subMenuComponents = [
    EventsList,
    EventsAdd,
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}
