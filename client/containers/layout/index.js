import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';

import Layout from '../../components/layout';

const subscriptions = ({ context }, onData) => {
  const { Meteor } = context;
  Meteor.subscribe('core.configs.user');
  onData(null, {});
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(Layout);
