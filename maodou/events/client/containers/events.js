import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Posts from '../components/events';

const initData = ({ context }, onData) => {
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

const mapStateToProps = (state) => ({
  // counter: state.counter
});

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(initData),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Posts);
