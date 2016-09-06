import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Post from '../components/post';

const initData = ({ context }, onData) => {
  const { Meteor, FlowRouter, swal } = context;
  const postId = FlowRouter.getParam('id');
  Meteor.call('posts.get.single', postId, (err, post) => {
    if (err) {
      if (err.error === '404'){
        swal({
          title: "Post Not Found",
          text: "Jumping to post list",
          type: "error"
        });
        FlowRouter.go('/posts');
      }
    }
    onData(null, { post });
  });
  onData(null, {});
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  compose(initData),
  useDeps(depsToProps)
)(Post);
