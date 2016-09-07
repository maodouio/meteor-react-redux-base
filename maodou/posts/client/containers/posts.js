import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Posts from '../components/posts';

const initData = ({ context }, onData) => {
  const { Meteor } = context;
  Meteor.call('posts.get', (err, posts) => {
    onData(null, {
      posts: { status: 'ready', data: posts }
    });
  });
  onData(null, {
    posts: { status: 'pending', data: [] }
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
)(Posts);
