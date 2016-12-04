export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;

  Meteor.publish('users.list', function () {
    return Meteor.users.find({}, {sort: { createdAt: -1}});
  });
};
