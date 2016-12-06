import { browserHistory } from 'react-router';

export default {
  permissionUp({ Meteor, Roles, toastr }, username, addRoles) {
    return () => {
      const target = Meteor.users.findOne({username: username});
      const loggedInUser = Meteor.user();
      if (!target) {
        toastr.error('纳入失败，用户没有找到', 'Error!');
        return;
      }
      if (!Roles.userIsInRole(loggedInUser, ['owner'])) {
        toastr.error('纳入失败，您没有权限', 'Error!');
        return null;
      }
      Meteor.call('permission.up', username, addRoles, (err) => {
        if (err) {
          console.log(err);
        } else {
          toastr.success('纳入成功');
        }
      });
    };
  },
  permissionDown({ Meteor, Roles, toastr }, user, id, itemRoles) {
    const loggedInUser = Meteor.user();
    return () => {
      ( !Roles.userIsInRole(loggedInUser._id, ['owner'])) && Roles.userIsInRole(id, ['admin']) ?
      toastr['error']('撤销失败，您没有权限', 'Error!')
      :
      Meteor.call('permission.down', id, itemRoles, (err) => {
        if (err) {
          console.log(err);
        } else {
          toastr['success']('撤销成功');
        }
      });
    };
  }
};
