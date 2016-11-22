import Events from './containers/events';
import Event from './containers/event';

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': ['events'],

    // insert routes for other layouts here

    '/': [
      {path: 'events', component: Events},
      {path: 'event/:id', component: Event}
    ]
  };

  return routes;
}
