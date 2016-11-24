import Posts from './containers/posts';
import Post from './containers/post';

export default function (injectDeps, { configs }) {
  return {
    '/admin': ['posts'],

    // insert routes for other layouts here
    '/': [
      {path: 'posts/list', component: Posts},
      {path: 'post/:id', component: Post}
    ]
  };
}
