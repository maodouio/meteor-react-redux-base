import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import PostsList from '../../components/admin/postsList';

const data = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find({}).fetch();
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
  context,
  dispatch: context.dispatch,
  deletePost: actions.posts.deletePost
});

export default composeAll(
  withTracker(data),
  useDeps(depsToProps)
)(PostsList);
