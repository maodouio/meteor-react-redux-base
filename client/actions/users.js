import { browserHistory } from 'react-router';

export default {
  enrollWithEmail({ Meteor }, email, callback) {
    return () => {
      Meteor.call("users.enrollWithEmail", email, callback);
    };
  },
  loginWithPassword({ Meteor, toastr }, email, password, callback) {
    return () => {
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          console.log(err);
          if (err.reason === "User not found") {
            toastr.error("登录失败，用户不存在");
          } else if (err.reason === "Incorrect password") {
            toastr.error("登录失败，密码错误");
          } else {
            toastr.error("登录失败");
          }
        } else {
          toastr.success("登录成功");
          browserHistory.push('/');
        }
      });
    }
  },
  resetPassword({Accounts}, token, password, callback) {
    Accounts.resetPassword(token, password, callback);
  },
  createNewUser({ Meteor, Accounts, toastr }, event) {
    return () => {
      event.preventDefault();
      const username = event.target.username.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const data = { username, email, password };
      if (username === '') {
        toastr.info("用户名不能为空");
        return;
      }
      if (email === '') {
        toastr.info("邮箱不能为空");
        return;
      }
      if (password.length < 6) {
        toastr.info("密码长度必须６位以上");
        return;
      }
      Meteor.call('users.register', data, (err) => {
        if (!err) {
          toastr["success"]("注册成功");
          Meteor.loginWithPassword(email, password);
          browserHistory.push('/');
        } else {
          console.log(err.reason);
          if (err.reason === "Username already exists.") {
            toastr.info("用户名已经存在");
          } else if (err.reason === "Email already exists.") {
            toastr.info("邮箱已经被注册了");
          } else if (err.reason === "Couldn't send verify email") {
            toastr.error("注册失败，不能发送验证邮箱");
          } else if (err.reason === "Need to set a username or email") {
            toastr.info("请填写用户名或邮箱");
          } else {
            toastr.info("注册失败");
          }
        }
      });
    }
  }
};
