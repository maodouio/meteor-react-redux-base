import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsAdmin from '../../components/admin';

const subscriptions = ({ context }, onData) => {
  const { Meteor } = context;
  if (Meteor.subscribe('posts.configs').ready()) {
    onData(null, {});
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(PostsAdmin);
