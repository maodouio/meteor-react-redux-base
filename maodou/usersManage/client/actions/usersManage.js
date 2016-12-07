import { browserHistory } from 'react-router';

export default {
  /**** User Actions ****/

  /**** Admin Actions ****/
  deleteUser({ Meteor, toastr, Roles }, event, id) {
    return () => {
      event.preventDefault();
      const isCon = confirm('此操作不可撤销,确定要删除吗？');
      if (isCon) {
        const user = Meteor.users.findOne(id);
        const currentUser = Meteor.user();
        if (Roles.userIsInRole(user, ['owner']) && Roles.userIsInRole(currentUser, ['owner'])) {
          toastr.error('自己不能删除自己');
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
          } else {
            toastr.success('删除成功');
          }
        });
      }
    };
  }
};
