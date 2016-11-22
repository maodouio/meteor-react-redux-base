import { browserHistory } from 'react-router'

export default {
  /**** User Actions ****/
  addCover(context, url) {
    return { type: 'ADD_POST_COVER', url };
  },
  /**** Admin Actions ****/
  addEvent({ Meteor, swal, toastr }, event, coverUrl) {
    return () => {
      event.preventDefault();
      const title = event.target.title.value;
      const time = event.target.time.value;
      const location = event.target.location.value;
      const limit = event.target.limit.value;
      const unit = event.target.unit.value;
      const fee = event.target.fee.value;
      const desc = $('#editor').summernote('code');
      Meteor.call('events.add', title, coverUrl, time, location, limit, unit, fee, desc, (err) => {
        if (err) {
          console.log(err);
          if (err.reason === "Title is required") {
            swal({
              title: '发布失败，请先添加文章标题',
              type: 'error'
            });
          } else if (err.reason === "Time is required") {
            swal({
              title: '发布失败，请先添加活动日期',
              type: 'error'
            });
          } else if (err.reason === "Cover url is required") {
            swal({
              title: '发布失败，请先添加活动封面',
              type: 'error'
            });
          } else if (err.reason === "Location is required") {
            swal({
              title: '发布失败，请先添加活动地点',
              type: 'error'
            });
          } else if (err.reason === "Fee is required") {
            swal({
              title: '发布失败，请先添加活动费用',
              type: 'error'
            });
          } else if (err.reason === "Limit is required") {
            swal({
              title: '发布失败，请先添加活动人数限制',
              type: 'error'
            });
          } else if (err.reason === "Limit must be a number") {
            swal({
              title: '发布失败，活动人数限制必须是数字',
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
              browserHistory.push('/admin/events/list');
            }
          });
        }
      });
    }
  },
  updateEvent({ Meteor, swal, toastr }, event, id, coverUrl) {
    return () => {
      event.preventDefault();
      const title = event.target.title.value;
      const time = event.target.time.value;
      const location = event.target.location.value;
      const limit = event.target.limit.value;
      const unit = event.target.unit.value;
      const fee = event.target.fee.value;
      const desc = $('#editor').summernote('code');
      const eventData = {
        title,
        time,
        location,
        limit,
        coverUrl,
        unit,
        fee,
        desc
      };
      Meteor.call('events.edit', id, eventData, (err) => {
        if (err) {
          console.log(err);
          if (err.reason === "Title is required") {
            swal({
              title: '发布失败，请先添加文章标题',
              type: 'error'
            });
          } else if (err.reason === "Time is required") {
            swal({
              title: '发布失败，请先添加活动日期',
              type: 'error'
            });
          } else if (err.reason === "Cover url is required") {
            swal({
              title: '发布失败，请先添加活动封面',
              type: 'error'
            });
          } else if (err.reason === "Location is required") {
            swal({
              title: '发布失败，请先添加活动地点',
              type: 'error'
            });
          } else if (err.reason === "Fee is required") {
            swal({
              title: '发布失败，请先添加活动费用',
              type: 'error'
            });
          } else if (err.reason === "Limit is required") {
            swal({
              title: '发布失败，请先添加活动人数限制',
              type: 'error'
            });
          } else if (err.reason === "Limit must be a number") {
            swal({
              title: '发布失败，活动人数限制必须是数字',
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
            title: '编辑活动成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/events/list');
            }
          });
        }
      });
    }
  },
  deleteEvent({ Meteor, toastr, swal }, event, id) {
    return () => {
      event.preventDefault();
      swal({
        title: '确定删除吗？',
        text: '此操作不可撤销',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        Meteor.call('events.delete', id, (err) => {
          if (err) {
            toastr["error"]("删除失败", "Error!");
          } else {
            toastr["success"]("删除成功", "Success!");
          }
        });
      }, (dismiss) => {
        if (dismiss === 'cancel') {
          console.log('cancel');
        }
      });
    }
  }

};
