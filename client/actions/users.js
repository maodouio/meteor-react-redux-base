export default {
  enrollWithEmail({Meteor}, email, callback) {
    Meteor.call("users.enrollWithEmail", email, callback);
  },
  loginWithPassword({Meteor}, email, password, callback) {
    Meteor.loginWithPassword(email, password, callback);
  },
  resetPassword({Accounts}, token, password, callback) {
    Accounts.resetPassword(token, password, callback);
  }
};
