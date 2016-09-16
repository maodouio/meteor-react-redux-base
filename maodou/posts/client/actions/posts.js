import { browserHistory } from 'react-router';

export default {
  addCover(context, url) {
    return { type: 'ADD_POST_COVER', url };
  },
  addPost(context, category, coverUrl, title, content) {
    return () => {
      if (!coverUrl) {
        return alert('need cover image');
      }
      context.Meteor.call('posts.add', category, coverUrl, title, content, (err) => {
        if (err) {
          alert(err.message);
        } else {
          browserHistory.push('/admin/posts/list');
        }
      });
    }
  }
  // TODO: need refactor all actions with redux thunk
};
