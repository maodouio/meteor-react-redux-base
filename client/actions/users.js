import { browserHistory } from 'react-router';

export default {
  enrollWithEmail({ Meteor }, email, callback) {
    return () => {
      Meteor.call('users.enrollWithEmail', email, callback);
    };
  },
  loginWithPassword({ Meteor, toastr }, phone, password, callback) {
    return () => {
      Meteor.call('verifyUser', phone, (err, info) => {
        if (err) {
          console.log(err);
          toastr.error('登录失败，手机号不正确');
        } else {
          Meteor.loginWithPassword(info.profile.nickname, password, (err) => {
            if (err) {
              console.log(err);
              if (err.reason === 'User not found') {
                toastr.error('登录失败，用户不存在');
              } else if (err.reason === 'Incorrect password') {
                toastr.error('登录失败，密码错误');
              } else {
                toastr.error('登录失败');
              }
            } else {
              toastr.success('登录成功');
              browserHistory.push('/user');
            }
          });
        }
      });
    };
  },
  resetPassword({Accounts}, token, password, callback) {
    Accounts.resetPassword(token, password, callback);
  },
  createNewUser({ Meteor, Accounts, toastr }, data) {
    return () => {
      const { username, phone, verifyCode, password } = data;
      if (username === '') {
        toastr.info('用户名不能为空');
        return;
      }
      if (phone === '') {
        toastr.info('手机号不能为空');
        return;
      }
      if (isNaN(parseInt(phone, 10))  && phone.length !== 11) {
        toastr.info('请输入正确的手机号');
        return;
      }
      if (verifyCode === '') {
        toastr.info('请输入验证码');
        return;
      }
      if (password.length < 6) {
        toastr.info('密码长度必须６位以上');
        return;
      }
      Meteor.call('users.register', data, (err) => {
        if (!err) {
          toastr.success('注册成功');
          Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
              console.log(err);
            }else {
              browserHistory.push('/user');
            }
          });
        } else {
          console.log(err.reason);
          if (err.reason === 'Username already exists.') {
            toastr.info('用户名已经存在');
          } else if (err.reason === 'Email already exists.') {
            toastr.info('邮箱已经被注册了');
          } else if (err.reason === "Couldn't send verify email") {
            toastr.error('注册失败，不能发送验证邮箱');
          } else if (err.reason === 'Need to set a username or email') {
            toastr.info('请填写用户名或邮箱');
          } else if (err.reason === 'phone exist.') {
            toastr.info('手机号已被注册');
          } else {
            toastr.info('注册失败');
          }
        }
      });
    };
  }
};
