import PostsAdmin from './containers/admin';
import PostsList from './containers/admin/postsList';
import PostsAdd from './containers/admin/postsAdd';
import PostsCategories from './containers/admin/postsCategories';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'posts', component: PostsAdmin, childRoutes:[]}
  ];

  const subMenu = configs.posts.subMenu;
  const subMenuComponents = [
    PostsList,
    PostsAdd,
    PostsCategories
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}
