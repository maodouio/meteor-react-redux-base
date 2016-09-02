import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Post from '../components/post';

const initData = ({ context }, onData) => {
  const { Meteor, FlowRouter } = context;
  const postId = FlowRouter.getParam('id')
  Meteor.call('posts.get.single', postId, (err, post) => {
    onData(null, { post });
  });
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  compose(initData),
  useDeps(depsToProps)
)(Post);
