import Customers from './containers/customers';
import Customer from './containers/customer';

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': ['customers'],

    // insert routes for other layouts here

    '/': [
      {path: 'customers/list', component: Customers},
      {path: 'customers/:id', component: Customer},
    ]
  };

  return routes;
}
