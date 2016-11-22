import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import EventsList from '../../components/admin/eventsList';

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('events.list').ready()) {
    const data = Collections.Events.find().fetch();
    onData(null, {
      events: { status: 'ready', data }
    });
  } else {
    onData(null, {
      events: { status: 'pending', data: [] }
    });
  }
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  deleteEvent: actions.events.deleteEvent
});

export default composeAll(
  withTracker(subscription),
  useDeps(depsToProps)
)(EventsList);
