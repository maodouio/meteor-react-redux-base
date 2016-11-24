import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router'

import Post from '../components/event';

const initData = ({ context, params }, onData) => {
  const { Meteor, toastr } = context;
  const eventId = params.id;
  Meteor.call('events.get.single', eventId, (err, event) => {
    if (err) {
      if (err.error === '404'){
        toastr.error("活动没有找到,返回到原来页面");
        browserHistory.push('/events');
      }
    } else {
      document.title = event.title;
      onData(null, { event });
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
)(Post);
