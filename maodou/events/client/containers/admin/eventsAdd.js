import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, withLifecycle, composeAll } from 'react-komposer-plus';

import EventsAdd from '../../components/admin/eventsAdd';

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
  context,
  dispatch: context.dispatch,
  addEvent: actions.events.addEvent
});

export default composeAll(
  withLifecycle(lifeCycle),
  withTracker(data),
  useDeps(depsToProps)
)(EventsAdd);
