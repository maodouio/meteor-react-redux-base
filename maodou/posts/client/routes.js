import React from 'react';
import { mount } from 'react-mounter';
import Posts from './containers/posts';
import PostsAdmin from './components/admin';
import PostsList from './containers/admin/postsList';
import PostsAdd from './containers/admin/postsAdd';

export default function(injectDeps, { FlowRouter, mainLayout, adminLayout }) {
  FlowRouter.route('/posts', {
    action() {
      mount(mainLayout, {
        content: () => (<Posts />)
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
  FlowRouter.route('/admin/posts/list', {
    action() {
      mount(adminLayout, {
        content: () => (<PostsAdmin><PostsList /></PostsAdmin>)
      });
    }
  });
  FlowRouter.route('/admin/posts/add', {
    action() {
      mount(adminLayout, {
        content: () => (<PostsAdmin><PostsAdd /></PostsAdmin>)
      });
    }
  });
}
