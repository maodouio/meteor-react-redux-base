import React from 'react';
import { mount } from 'react-mounter';
import Posts from './containers/posts';
import Post from './containers/post';
import PostsAdmin from './containers/admin';
import PostsList from './containers/admin/postsList';
import PostsAdd from './containers/admin/postsAdd';
import PostsCategories from './containers/admin/postsCategories';

export default function(injectDeps, { FlowRouter, mainLayout, adminLayout, configs }) {
  FlowRouter.route('/posts', {
    action() {
      mount(mainLayout, {
        content: () => (<Posts />)
      });
    }
  });
  FlowRouter.route('/posts/:id', {
    action() {
      mount(mainLayout, {
        content: () => (<Post />)
      });
    }
  });
  FlowRouter.route('/admin/posts', {
    action() {
      mount(adminLayout, {
        content: () => (<PostsAdmin />)
      });
    }
  });

  const subMenu = configs.posts.subMenu;
  const subMenuComponents = [
    <PostsList />,
    <PostsAdd />,
    <PostsCategories />
  ];
  subMenu.map((menu, index) => {
    FlowRouter.route(menu.href, {
      action() {
        mount(adminLayout, {
          content: () => (<PostsAdmin>{subMenuComponents[index]}</PostsAdmin>)
        });
      }
    });
  });
}
