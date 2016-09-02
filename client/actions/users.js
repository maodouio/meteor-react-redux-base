export default {
  enrollWithEmail({Meteor}, email) {
    Meteor.call("users.enrollWithEmail", email);
  },
  loginWithPassword({Meteor}, email, password) {
    Meteor.loginWithPassword(email, password);
  },
  resetPassword({Accounts}, token, password) {
    Accounts.resetPassword(token, password);
  }
};
