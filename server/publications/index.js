export default ({ Meteor, Collections }) => {
  const { Users, Packages } = Collections;

  Meteor.publish('core.configs.user', function () {
    // TODO: Add configs filter for normal users
    return Packages.find({ name: 'core' });
  });

  Meteor.publish('core.configs', function () {
    return Packages.find({ name: 'core' });
  });
  Meteor.publish('users.list', function () {
    return Users.find();
  });
  Meteor.publish(null, function (){
    return Meteor.roles.find({});
  });
};
