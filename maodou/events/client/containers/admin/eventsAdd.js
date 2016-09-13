import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, withLifecycle, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router'

import EventsAdd from '../../components/admin/eventsAdd';

const userEvents = {
  addEvent: ({ context }, event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = $('#editor').summernote('code');
    context.Meteor.call('events.add', title, content, (err) => {
      if (err) {
        alert(err.message);
      } else {
        browserHistory.push('/admin/events/list');
      }
    });
  }
};

const lifeCycle = {
  componentDidMount() {
    $('#editor').summernote({
      height: 250
    });
  }
};

const data = ({ context }, onData) => {
  const { Collections } = context;
  const pkg = Collections.Packages.findOne({ name: 'events' }) || {};
  const configs = pkg.configs || {};
  onData(null, { categories: configs.categories || [] });
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withHandlers(userEvents),
  withLifecycle(lifeCycle),
  withTracker(data),
  useDeps(depsToProps)
)(EventsAdd);
