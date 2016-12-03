export default (context) => {
  const { Meteor, Collections } = context;
  Meteor.methods({
    'users.get'() {
      return Meteor.users.find().fetch();
    },
    'user.delete'(id) {
      const user = Meteor.users.findOne(id);
      Meteor.users.remove(id);
    },
  });
};
