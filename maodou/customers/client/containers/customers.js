import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Customers from '../components/customers';

const userCustomers = {
  deleteCustomer({ context }, id, customer) {

  }
};

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;

  if (Meteor.subscribe('customers.list').ready()) {
    const customers = Collections.Customers.find().fetch();
    onData(null, {
      customers: { status: 'ready', data: customers }
    });
  } else {
    onData(null, {
      customers: { status: 'pending', data: [] }
    });
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withHandlers(userCustomers),
  withTracker(subscription),
  useDeps(depsToProps)
)(Customers);
