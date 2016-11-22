import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsConfigure from '../../components/admin/postsConfigure';

const data = ({ context }, onData) => {
  const { Collections } = context;
  const pkg = Collections.Packages.findOne({ name: 'posts' }) || {};
  const configs = pkg.configs || { UI: '' };
  onData(null, {
    categories: configs.categories || [],
    imgPosition: configs.UI.listImgPosition || 'left',
    tabsPosition: configs.UI.categoriesPosition || 'top',
    tabsColor: configs.UI.categoriesTabsColor || 'green'
  });
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  addCategory: actions.posts.addCategory,
  deleteCategory: actions.posts.deleteCategory,
  changeImgPosition: actions.posts.changeImgPosition,
  changeTabsPosition: actions.posts.changeTabsPosition,
  changeTabsColor: actions.posts.changeTabsColor
});

export default composeAll(
  withTracker(data),
  useDeps(depsToProps)
)(PostsConfigure);
