import PostsAdmin from './components/admin';
import PostsList from './containers/admin/postsList';
import PostsEdit from './containers/admin/postsEdit';
import PostsAdd from './containers/admin/postsAdd';
import PostsConfigure from './containers/admin/postsConfigure';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'posts', component: PostsAdmin, childRoutes:[]}
  ];

  const subMenu = configs.posts.subMenu;
  const subMenuComponents = [
    PostsList,
    PostsAdd,
    PostsEdit,
    PostsConfigure,
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}
