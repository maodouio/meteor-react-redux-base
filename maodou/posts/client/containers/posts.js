import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Posts from '../components/posts';

const userEvents = {
  addPost: ({ context }, event) => {
    event.preventDefault();
    context.Meteor.call('posts.add','my title');
  }
};

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
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Posts);
