import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsList from '../../components/admin/postsList';

const initData = ({ context }, onData) => {
  const { Meteor } = context;
  Meteor.call('posts.get', (err, posts) => {
    onData(null, { posts });
  });
};

const mapStateToProps = (state) => ({
  // counter: state.counter
});

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  compose(initData),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(PostsList);
