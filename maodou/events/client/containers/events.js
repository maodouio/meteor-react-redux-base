import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Events from '../components/events';

const userEvents = {
  deleteEvent({ context }, id, event) {
    event.preventDefault();
    context.Meteor.call('events.delete', id, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }
};

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('events.list').ready()) {
    const events = Collections.Events.find().fetch();
    onData(null, {
      events: { status: 'ready', data: events }
    });
  } else {
    onData(null, {
      events: { status: 'pending', data: [] }
    });
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withHandlers(userEvents),
  withTracker(subscription),
  useDeps(depsToProps)
)(Events);
