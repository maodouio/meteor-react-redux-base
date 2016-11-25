import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, withLifecycle, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router';

import CustumersEdit from '../../components/admin/customersEdit';

// const lifeCycle = {
//   componentDidMount() {
//     $('#editor').summernote({
//       height: 250
//     });
//   }
// };

const data = ({ context, params }, onData) => {
  const { Meteor, Collections, swal } = context;
  const customerId = params.id;
  Meteor.call('customers.get.single', customerId, (err, customer) => {
    if (err) {
      if (err.error === '404'){
        toastr.error("客户没有找到,返回到原来页面");
        browserHistory.push('admin/customers/list');
      }
    } else {
      document.title = customer.title;
      onData(null, { customer });
    }
  });
  // onData(null, {});
};
const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  editCustomer: actions.customers.editCustomer
});

export default composeAll(
  // withLifecycle(lifeCycle),
  withTracker(data),
  useDeps(depsToProps)
)(CustumersEdit);
