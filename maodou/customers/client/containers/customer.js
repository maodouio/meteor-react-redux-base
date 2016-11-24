import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router'

import Customer from '../components/customer';

const initData = ({ context, params }, onData) => {
  const { Meteor, swal } = context;
  const customerId = params.id;
  Meteor.call('customers.get.single', customerId, (err, customer) => {
    if (err) {
      if (err.error === '404'){
        swal({
          title: "Customer Not Found",
          text: "Jumping to customer list",
          type: "error"
        });
        browserHistory.push('/customers');
      }
    } else {
      document.title = customer.title;
      onData(null, { customer });
    }
  });
  onData(null, {});
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  compose(initData),
  useDeps(depsToProps)
)(Customer);
