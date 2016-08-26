import { useDeps } from 'react-simple-di';
import { withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Posts from '../components/posts';

const userEvents = {
  addPost: ({ context }, event) => {
    event.preventDefault();
    context.Collections.Posts.insert({ title: 'test title'});
  }
};

const subscriptions = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('posts.list').ready()) {
    onData(null, {
      posts: Collections.Posts.find().fetch()
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
  withTracker(subscriptions),
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Posts);
