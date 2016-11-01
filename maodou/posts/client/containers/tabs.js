import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Tabs from '../components/tabs';

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('posts.configs.user').ready()) {
    const configs = Collections.Packages.findOne({ name: 'posts' }).configs;
    onData(null, {
      configs
    });
  } else {
    onData(null, {});
  }
};

const mapStateToProps = (state) => ({
  category: state.postsCategory
});

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  changeCategory: actions.posts.changeCategory
});

export default composeAll(
  withTracker(subscription),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Tabs);
