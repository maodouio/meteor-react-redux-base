export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;

  Meteor.publish('core.configs.user', function () {
    // TODO: Add configs filter for normal users
    return Packages.find({ name: 'core' });
  });

  Meteor.publish('core.configs', function () {
    return Packages.find({ name: 'core' });
  });
}
