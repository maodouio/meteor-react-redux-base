import { browserHistory } from 'react-router';

export default {
  /**** User Actions ****/
  changeCategory(context, event, category) {
    return (dispatch) => {
      event.preventDefault();
      dispatch({ type: 'CHANGE_POSTS_CATEGORY', category })
    }
  },

  /**** Admin Actions ****/
  addPost({ Meteor, swal, toastr }, event, coverUrl) {
    return () => {
      event.preventDefault();
      const category = event.target.category.value;
      const title = event.target.title.value;
      const content = $('#editor').summernote('code');
      if (!coverUrl) {
        return alert('need cover image');
      }
      Meteor.call('posts.add', category, coverUrl, title, content, (err) => {
        if (err) {
          toastr["error"]("发布失败", "Error!");
        } else {
          swal({
            title: '发布成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/posts/list');
            }
          });
        }
      });
    }
  },
  addCover(context, url) {
    return { type: 'ADD_POST_COVER', url };
  },
  deletePost({ Meteor }, post, id) {
    return ()=> {
      event.preventDefault();
      Meteor.call('post.delete', id, (err) => {
        if (err) {
          toastr["error"]("删除失败", "Error!");
        }
      });
    }
  },
  changeImgPosition({ Meteor, toastr }, event) {
    return () => {
      Meteor.call('posts.imgPosition', event.target.value, (err) => {
        if (err) {
          toastr["error"]("删除失败", "Error!");
        } else {
          toastr["success"]("保存成功", "Success!");
        }
      });
    };
  },
  changeTabsPosition({ Meteor, toastr }, event) {
    return (dispatch) => {
      Meteor.call('posts.categories.tabsPosition', event.target.value, (err) => {
        if (err) {
          toastr["error"]("保存失败", "Error!");
        } else {
          toastr["success"]("保存成功", "Success!");
        }
      });
    };
  },
  changeTabsColor({ Meteor, toastr }, event) {
    return (dispatch) => {
      Meteor.call('posts.categories.color', event.target.value, (err) => {
        if (err) {
          toastr["error"]("修改失败", "Error!");
        } else {
          toastr["success"]("保存成功", "Success!");
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
