import { browserHistory } from 'react-router';

export default {
  enrollWithEmail({Meteor}, email, callback) {
    Meteor.call("users.enrollWithEmail", email, callback);
  },
  loginWithPassword({ Meteor, swal, toastr }, email, password, callback) {
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log(err);
        if (err.reason === "User not found") {
          swal({
            title: '登录失败，用户不存在',
            type: 'error'
          });
        } else if (err.reason === "Incorrect password") {
          swal({
            title: '登录失败，密码错误',
            type: 'error'
          });
        } else {
          swal({
            title: '登录失败',
            type: 'error'
          });
        }
      } else {
        toastr["success"]("登录成功", "Success!");
      }
    });
  },

  resetPassword({Accounts}, token, password, callback) {
    Accounts.resetPassword(token, password, callback);
  },
  createNewUser({ Meteor, Accounts, toastr, swal }, event) {
    return () => {
      event.preventDefault();
      const username = event.target.username.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const data = { username, email, password };
      if (username === '') {
        swal({
          title: '注册失败，用户名不能为空',
          type: 'error'
        });
        return;
      }
      if (email === '') {
        swal({
          title: '注册失败，邮箱不能为空',
          type: 'error'
        });
        return;
      }
      if (password.length < 6) {
        swal({
          title: '注册失败，密码长度必须６位以上',
          type: 'error'
        });
        return;
      }
      Meteor.call('users.register', data, (err) => {
        if (!err) {
          toastr["success"]("注册成功", "Success!");
          Meteor.loginWithPassword(email, password);
          browserHistory.push('/');
        } else {
          console.log(err.reason);
          if (err.reason === "Username already exists.") {
            swal({
              title: '注册失败，用户名已经存在',
              type: 'error'
            });
          } else if (err.reason === "Email already exists.") {
            swal({
              title: '注册失败，邮箱已经被注册了',
              type: 'error'
            });
          } else if (err.reason === "Couldn't send verify email") {
            swal({
              title: '注册失败，不能发送验证邮箱',
              type: 'error'
            });
          } else if (err.reason === "Need to set a username or email") {
            swal({
              title: '注册失败，请填写用户名或邮箱',
              type: 'error'
            });
          } else {
            swal({
              title: '注册失败',
              type: 'error'
            });
          }
        }
      });
    }
  }
};
