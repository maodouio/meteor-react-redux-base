import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Posts from '../components/posts';

const subscription = ({ context, category }, onData) => {
  const { Meteor, Collections } = context;
  const postsPkg = Collections.Packages.findOne({ name: 'posts' }) || {};
  if (Meteor.subscribe('posts.list', category).ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {
      posts: { status: 'ready', data: posts },
      configs: postsPkg.configs
    });
  } else {
    onData(null, {
      posts: { status: 'pending', data: [] },
      configs: postsPkg.configs
    });
  }
};

const mapStateToProps = (state) => ({
  category: state.postsCategory
});

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscription),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Posts);
