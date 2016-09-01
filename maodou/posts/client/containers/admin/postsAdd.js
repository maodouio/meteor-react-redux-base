import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsAdd from '../../components/admin/postsAdd';

const userEvents = {
  addPost: ({ context }, event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    context.Meteor.call('posts.add', title, content, (err, res) => {
      if (err) {
        alert(err.message);
      } else {
        context.FlowRouter.go('/admin/posts/list');
      }
    });
  }
};

// const initData = ({ context }, onData) => {
//   const { Meteor } = context;
// };

const mapStateToProps = (state) => ({
  // counter: state.counter
});

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  // compose(initData),
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(PostsAdd);
