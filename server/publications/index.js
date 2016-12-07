export default ({ Meteor, Collections }) => {
  const { Packages, InstanceInfos } = Collections;

  Meteor.publish('core.configs.user', function () {
    // TODO: Add configs filter for normal users
    return Packages.find({ name: 'core' });
  });

  Meteor.publish('core.configs', function () {
    return Packages.find({ name: 'core' });
  });

  Meteor.publish(null, function (){
    return Meteor.roles.find({});
  });

  Meteor.publish('packages.list', () => {
    return Packages.find({});
  });

  Meteor.publish('instanceInfos', () => {
    return InstanceInfos.find({});
  });
};
