import { browserHistory } from 'react-router';
import { handlePostError } from 'lib/helpers';
import { defaultImgUrl } from 'lib/helpers/defaultValue';
import { isEmpty } from 'lodash/lang';

export default {
  /**** User Actions ****/
  changeCategory(context, event, category) {
    return (dispatch) => {
      event.preventDefault();
      dispatch({ type: 'CHANGE_POSTS_CATEGORY', category });
    };
  },

  /**** Admin Actions ****/
  addPost({ Meteor, toastr }, event, coverUrl) {
    return () => {
      event.preventDefault();
      const category = event.target.category.value;
      const title = event.target.title.value;
      const author = event.target.author.value;
      const content = $('#editor').summernote('code');
      const imgUrl = isEmpty(coverUrl) ? defaultImgUrl : coverUrl;
      Meteor.call('posts.add', category, imgUrl, title, author, content, (err) => {
        if (err) {
          console.log(err);
          handlePostError(err);
        } else {
          toastr.success('发布成功');
          browserHistory.push('/admin/posts/list');
        }
      });
    };
  },
  updatePost({ Meteor, toastr }, event, id, coverUrl) {
    return () => {
      event.preventDefault();
      const category = event.target.category.value;
      const title = event.target.title.value;
      const author = event.target.author.value;
      const content = $('#editor').summernote('code');
      const postData = {
        category,
        title,
        coverUrl,
        author,
        content
      };
      Meteor.call('posts.edit', id, postData, (err) => {
        if (err) {
          console.log(err);
          handlePostError(err);
        } else {
          toastr.success('编辑文章成功');
          browserHistory.push('/admin/posts/list');
        }
      });
    };
  },
  addCover(context, url) {
    return { type: 'ADD_POST_COVER', url };
  },
  deletePost({ Meteor, swal, toastr }, event, id) {
    return ()=> {
      event.preventDefault();
      const isCon = confirm('此操作不可撤销,确定要删除吗？');
      if (isCon) {
        Meteor.call('posts.delete', id, (err) => {
          if (err) {
            console.log(err);
            toastr.error('删除失败');
          } else {
            toastr.success('删除成功');
          }
        });
      }
    };
  },
  changeImgPosition({ Meteor, toastr }, event) {
    return () => {
      Meteor.call('posts.imgPosition', event.target.value, (err) => {
        if (err) {
          toastr.error('删除失败');
        } else {
          toastr.success('保存成功');
        }
      });
    };
  },
  changeTabsPosition({ Meteor, toastr }, event) {
    return (dispatch) => {
      Meteor.call('posts.categories.tabsPosition', event.target.value, (err) => {
        if (err) {
          toastr.error('删除失败');
        } else {
          toastr.success('保存成功');
        }
      });
    };
  },
  changeTabsColor({ Meteor, toastr }, event) {
    return (dispatch) => {
      Meteor.call('posts.categories.color', event.target.value, (err) => {
        if (err) {
          toastr.error('删除失败');
        } else {
          toastr.success('保存成功');
        }
      });
    };
  },
  addCategory({ Meteor }, event) {
    event.preventDefault();
    const category = event.target.category.value;
    Meteor.call('posts.categories.add', category, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  },
  deleteCategory({ Meteor }, event, category) {
    event.preventDefault();
    Meteor.call('posts.categories.delete', category, (err) => {
      if (err) {
        alert(err.message);
      }
    });
  }
};
