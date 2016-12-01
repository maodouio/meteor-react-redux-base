export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;

  Meteor.publish('users.list', function () {
    return Meteor.Users.find({}, {sort: { createdAt: -1}});
  });
};
