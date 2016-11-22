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
      const author = event.target.author.value;
      const content = $('#editor').summernote('code');
      // if (!coverUrl) {
      //   toastr["error"]("请先添加图片", "Error!");
      // }
      Meteor.call('posts.add', category, coverUrl, title, author, content, (err) => {
        if (err) {
          console.log(err);
          if (err.reason === "Title is required") {
            swal({
              title: '发布失败，请先添加文章标题',
              type: 'error'
            });
          } else if (err.reason === "Cover url is required") {
            swal({
              title: '发布失败，请先添加封面图片',
              type: 'error'
            });
          } else if (err.reason === "Author is required") {
            swal({
              title: '发布失败，请先添加文章作者',
              type: 'error'
            });
          } else {
            swal({
              title: '发布失败',
              type: 'error'
            });
          }
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
  updatePost({ Meteor, swal, toastr }, event, id, coverUrl) {
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
          if (err.reason === "Title is required") {
            swal({
              title: '发布失败，请先添加文章标题',
              type: 'error'
            });
          } else if (err.reason === "Cover url is required") {
            swal({
              title: '发布失败，请先添加封面图片',
              type: 'error'
            });
          } else if (err.reason === "Author is required") {
            swal({
              title: '发布失败，请先添加文章作者',
              type: 'error'
            });
          } else {
            swal({
              title: '发布失败',
              type: 'error'
            });
          }
        } else {
          swal({
            title: '编辑文章成功',
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
  deletePost({ Meteor, swal, toastr }, event, id) {
    return ()=> {
      event.preventDefault();
      swal({
        title: '确定删除吗？',
        text: '此操作不可撤销',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then( () => {
        Meteor.call('posts.delete', id, (err) => {
          if (err) {
            console.log(err);
            toastr["error"]("删除失败", "Error!");
          } else {
            toastr["success"]("删除成功", "Error!");
          }
        });
      }, (dismiss) => {
        if (dismiss === 'cancel') {
          console.log('cancel');
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
