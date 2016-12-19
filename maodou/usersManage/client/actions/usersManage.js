import { browserHistory } from 'react-router';
import { isEmpty } from 'lodash/lang';
import { message } from 'antd';

export default {
  /**** User Actions ****/

  /**** Admin Actions ****/
  deleteUser({ Meteor, toastr, Roles }, id) {
    return () => {
      const user = Meteor.users.findOne(id);
      const currentUser = Meteor.user();
      if (Roles.userIsInRole(user, ['owner']) && Roles.userIsInRole(currentUser, ['owner'])) {
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
          message.error('删除失败');
        } else {
          message.success('删除成功');
        }
      });
    };
  },
  addToMember({ Meteor, toastr }, id, phone, email, job, hobby) {
    return () => {
      if (isEmpty(phone)) {
        toastr.info('电话号码为必填项');
        return null;
      }
      if (isEmpty(email)) {
        toastr.info('邮箱为必填项');
        return null;
      }
      const data = {
        id,
        phone,
        email,
        job: isEmpty(job) ? '未知' : job,
        hobby: isEmpty(hobby) ? '未知' : hobby,
      };

      Meteor.call('applyMember', data, (err) =>{
        if (err) {
          console.log(err);
          if (err.reason === 'phone exist.') {
            toastr.error('手机号已存在');
          }
        } else {
          toastr.info('申请已送出，请等待！');
        }
      });
    };
  },
  agreeMember({ Meteor, toastr }, event, id) {
    return () => {
      event.preventDefault();

      Meteor.call('agreeMember', id, (err) => {
        if (err) {
          console.log(err);
          toastr.error('加入会员失败');
        } else {
          toastr.success('已加入！');
        }
      });
    };
  },
  disagreeMember({ Meteor, toastr }, event, id) {
    return () => {
      event.preventDefault();

      Meteor.call('disagreeMember', id, (err) => {
        if (err) {
          console.log(err);
          toastr.error('操作失败');
        } else {
          toastr.success('操作成功！');
        }
      });
    };
  },
};

