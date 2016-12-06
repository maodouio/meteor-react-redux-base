import { browserHistory } from 'react-router';
import { handleEventError } from 'lib/helpers';
import { defaultImgUrl } from 'lib/helpers/defaultValue';
import { isEmpty } from 'lodash/lang';

export default {
  /**** User Actions ****/
  addCover(context, url) {
    return { type: 'ADD_POST_COVER', url };
  },
  /**** Admin Actions ****/
  addEvent({ Meteor, toastr }, event, coverUrl) {
    return () => {
      event.preventDefault();
      const title = event.target.title.value;
      const time = event.target.time.value;
      const location = event.target.location.value;
      const limit = event.target.limit.value;
      const unit = event.target.unit.value;
      const fee = event.target.fee.value;
      const desc = $('#editor').summernote('code');
      const imgUrl = isEmpty(coverUrl) ? defaultImgUrl : coverUrl;

      Meteor.call('events.add', title, imgUrl, time, location, limit, unit, fee, desc, (err) => {
        if (err) {
          console.log(err);
          handleEventError(err);
        } else {
          toastr.success('发布成功');
          browserHistory.push('/admin/events/list');
        }
      });
    };
  },
  updateEvent({ Meteor, toastr }, event, id, coverUrl) {
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
          handleEventError(err);
        } else {
          toastr.success('编辑活动成功');
          browserHistory.push('/admin/events/list');
        }
      });
    };
  },
  deleteEvent({ Meteor, toastr, swal }, event, id) {
    return () => {
      event.preventDefault();
      const isCon = confirm('此操作不可撤销,确定要删除吗？');
      if (isCon) {
        Meteor.call('events.delete', id, (err) => {
          if (err) {
            toastr.error('删除失败');
          } else {
            toastr.success('删除成功');
          }
        });
      }
    };
  }
};
