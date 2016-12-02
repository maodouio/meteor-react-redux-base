import { browserHistory } from 'react-router'

export default {
  permissionUp({ Meteor, swal, toastr }, username, addRoles) {
    const loggedInUser = Meteor.user();
    return () => {
      ( ! Roles.userIsInRole(loggedInUser._id, ['owner']) && addRoles === 'admin' ) ?
      toastr["error"]("纳入失败，您没有权限", "Error!")
      :
      Meteor.call('permission.up', username, addRoles, (err) => {
        if (err) {
          console.log(err);
        } else {
          swal({
            title: '纳入成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/memberManage');
            }
          });
        }
      });
    }
  },
  permissionDown({ Meteor, swal, toastr }, user, id, itemRoles) {
    const loggedInUser = Meteor.user();
    console.log(user);
    return () => {
      ( ! Roles.userIsInRole(loggedInUser._id, ['owner'])) && Roles.userIsInRole(id, ['admin']) ?
      toastr["error"]("撤销失败，您没有权限", "Error!")
      :
      Meteor.call('permission.down', id, itemRoles, (err) => {
        if (err) {
          console.log(err);
        } else {
          swal({
            title: '撤销成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/memberManage');
            }
          });
        }
      });
    }
  }
}
