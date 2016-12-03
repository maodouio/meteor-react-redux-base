export default (context) => {
  const { Meteor, Collections } = context;
  Meteor.methods({
    'users.get'() {
      return Meteor.Users.find().fetch();
    },
    'user.delete'(id) {
      Meteor.users.remove(id);
    },
  });
};
