import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import CustomersAdd from '../../components/admin/customersAdd';

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
  context,
  dispatch: context.dispatch,
  addCustomer: actions.customers.addCustomer
});

export default composeAll(
  withTracker(subscription),
  useDeps(depsToProps)
)(CustomersAdd);
