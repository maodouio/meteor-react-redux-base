import { browserHistory } from 'react-router';

export default {
  enrollWithEmail({Meteor}, email, callback) {
    Meteor.call("users.enrollWithEmail", email, callback);
  },
  loginWithPassword({Meteor}, email, password, callback) {
    Meteor.loginWithPassword(email, password, callback);
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

      Meteor.call('users.register', data, (err) => {
        if (!err) {
          toastr["success"]("注册成功", "Success!");
          Meteor.loginWithPassword(email, password);
          browserHistory.push('/');
        } else {
          console.log(err.reason);
          if (err.reason === "Username already exists. [403]") {
            swal({
              title: '注册失败，用户名已经存在',
              type: 'error'
            });
          } else if (err.reason === "Email already exists. [403]") {
            swal({
              title: '注册失败，邮箱已经被注册了',
              type: 'error'
            });
          }
        }
      });
    }
  }
};
