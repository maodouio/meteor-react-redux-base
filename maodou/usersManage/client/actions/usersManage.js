import { browserHistory } from 'react-router';
import { handleEventError } from 'lib/helpers';

export default {
  /**** User Actions ****/

  /**** Admin Actions ****/
  deleteUser({ Meteor, toastr }, event, id) {
    return () => {
      event.preventDefault();
      const isCon = confirm('此操作不可撤销,确定要删除吗？');
      if (isCon) {
        Meteor.call('user.delete', id, (err) => {
          if (err) {
            console.log(err);
            toastr.error('删除失败');
          } else {
            toastr.success('删除成功');
          }
        });
      }
    };
  }
};
