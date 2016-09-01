import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsAdd from '../../components/admin/postsAdd';

const userEvents = {
  addPost: ({ context }, event) => {
    event.preventDefault();
    const category = event.target.category.value;
    const title = event.target.title.value;
    const content = event.target.content.value;
    context.Meteor.call('posts.add', category, title, content, (err) => {
      if (err) {
        alert(err.message);
      } else {
        context.FlowRouter.go('/admin/posts/list');
      }
    });
  }
};

const data = ({ context }, onData) => {
  const { Collections } = context;
  const pkg = Collections.Packages.findOne({ name: 'posts' });
  onData(null, { categories: pkg.configs.categories });
};

const mapStateToProps = (state) => ({
  // counter: state.counter
});

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  compose(data),
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(PostsAdd);
