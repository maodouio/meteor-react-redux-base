export default {
  postTmpCover(state = '', action) {
    switch (action.type){
      case 'ADD_POST_COVER':
        return action.url;
      default:
        return state;
    }
  },
  postsCategory(state = '', action) {
    switch (action.type){
      case 'CHANGE_POSTS_CATEGORY':
        return action.category;
      default:
        return state;
    }
  }
};
