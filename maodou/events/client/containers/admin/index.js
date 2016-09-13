import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import EventsAdmin from '../../components/admin';

const subscriptions = ({ context }, onData) => {
  const {Meteor} = context;
  Meteor.subscribe('events.configs');
  onData(null, {});
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(EventsAdmin);
