import { browserHistory } from 'react-router';

export default {
  permissionUp({ Meteor, Roles, toastr }, username, role) {
    return () => {
      const target = Meteor.users.findOne({'profile.nickname': username});
      if (!target) {
        toastr.error('纳入失败，用户没有找到', 'Error!');
        return;
      }
      if (Roles.userIsInRole(target, [role])) {
        toastr.error('纳入失败，用户已在列表中', 'Error!');
        return;
      }
      if (Roles.userIsInRole(target, ['owner'])) {
        toastr.error('你是最高权限者，不能降级', 'Error!');
        return;
      }
      Meteor.call('permission.up', target._id, role, (err) => {
        if (err) {
          console.log(err);
          toastr.success('纳入失败');
        } else {
          toastr.success('纳入成功');
        }
      });
    };
  },
  permissionDown({ Meteor, Roles, toastr }, event, id) {
    return () => {
      event.preventDefault();
      Meteor.call('permission.down', id, (err) => {
        if (err) {
          console.log(err);
          toastr.success('撤销失败');
        } else {
          toastr['success']('撤销成功');
        }
      });
    };
  }
};
