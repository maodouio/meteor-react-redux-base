import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsCategories from '../../components/admin/postsCategories';

const userEvents = {
  addCategory({ context }, event)  {
    event.preventDefault();
    const category = event.target.category.value;
    context.Meteor.call('posts.categories.add', category, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  },
  deleteCategory({ context }, category, event)  {
    event.preventDefault();
    context.Meteor.call('posts.categories.delete', category, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }
};

const data = ({ context }, onData) => {
  const { Collections } = context;
  const pkg = Collections.Packages.findOne({ name: 'posts' }) || {};
  const configs = pkg.configs || {};
  onData(null, { categories: configs.categories || [] });
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withHandlers(userEvents),
  withTracker(data),
  useDeps(depsToProps)
)(PostsCategories);
