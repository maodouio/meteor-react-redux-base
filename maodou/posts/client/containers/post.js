import { useDeps } from 'react-simple-di';
import { compose, withLifecycle, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router'

import Post from '../components/post';

const lifeCycle = {
  componentDidMount() {
    const {dispatch, hideMainNav} = this.props;
    dispatch(hideMainNav(''));
  }
  componentWillUnmount(){
    const {dispatch, hideMainNav} = this.props;
    dispatch(hideMainNav(''));
  }
}

const initData = ({ context, params }, onData) => {
  const { Meteor, toastr } = context;
  const postId = params.id;
  Meteor.call('posts.get.single', postId, (err, post) => {
    if (err) {
      if (err.error === '404'){
        toastr.error("文章没有找到,返回到原来页面");
        browserHistory.push('/posts');
      }
    } else {
      document.title = post.title;
      onData(null, { post });
    }
  });
  onData(null, {});
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  hideMainNav: actions.posts.hideMainNav,
});

export default composeAll(
  compose(initData),
  withLifecycle(lifeCycle),
  useDeps(depsToProps)
)(Post);
