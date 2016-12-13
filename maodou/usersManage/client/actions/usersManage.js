import { browserHistory } from 'react-router';
import { message } from 'antd';

export default {
  /**** User Actions ****/

  /**** Admin Actions ****/
  deleteUser({ Meteor, toastr, Roles }, id) {
    return () => {
      const user = Meteor.users.findOne(id);
      const currentUser = Meteor.user();
      if (Roles.userIsInRole(user, ['owner']) && Roles.userIsInRole(currentUser, ['owner'])) {
        toastr.error('自己不能删除自己');
        message.error('自己不能删除自己');
        return null;
      }
      if (Roles.userIsInRole(user, ['owner']) && Roles.userIsInRole(currentUser, ['admin'])) {
        toastr.error('不能删除最高权限者');
        return null;
      }
      if (Roles.userIsInRole(user, ['admin']) && Roles.userIsInRole(currentUser, ['admin'])) {
        toastr.error('不能删除其他管理员');
        return null;
      }
      Meteor.call('user.delete', id, (err) => {
        if (err) {
          console.log(err);
          toastr.error('删除失败');
          message.error('删除失败');
        } else {
          toastr.success('删除成功');
          message.success('删除成功');
        }
      });
    };
  }
};
