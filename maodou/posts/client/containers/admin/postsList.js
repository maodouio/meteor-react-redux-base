import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsList from '../../components/admin/postsList';

const userEvents = {
  deletePost({ context }, id, event)  {
    event.preventDefault();
    context.Meteor.call('posts.delete', id, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }
};

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {
      posts: { status: 'ready', data: posts }
    });
  } else {
    onData(null, {
      posts: { status: 'pending', data: [] }
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
)(PostsList);
