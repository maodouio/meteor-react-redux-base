import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import CustomersAdmin from '../../components/admin';

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  useDeps(depsToProps)
)(CustomersAdmin);
