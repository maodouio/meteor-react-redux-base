import React from 'react';
import { mount } from 'react-mounter';
import Posts from './containers/posts';
import Post from './containers/post';
import PostsAdmin from './containers/admin';
import PostsList from './containers/admin/postsList';
import PostsAdd from './containers/admin/postsAdd';
import PostsCategories from './containers/admin/postsCategories';

export default function (injectDeps, { configs }) {
  const routes = {
    '/admin': [
      {path: 'posts', component: PostsAdmin}
    ],

    // insert routes for other layouts here

    '/': [
      {path: 'posts', component: Posts},
      {path: 'post/:id', component: Post}
    ]
  };

  const subMenu = configs.posts.subMenu;
  const subMenuComponents = [
    <PostsList />,
    <PostsAdd />,
    <PostsCategories />
  ];
  subMenu.map((menu, index) => {
    routes['/admin'].push({
      path: menu.href,
      component: () => <PostsAdmin>{subMenuComponents[index]}</PostsAdmin>
    });
  });

  return routes;
}
