export default ({ Meteor, Collections }) => {
<<<<<<< HEAD
  const { Users, Packages } = Collections;
  const { Packages, InstanceInfos } = Collections;

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
  Meteor.publish('packages.list', () => {
    return Packages.find({});
  });

  Meteor.publish('instanceInfos', () => {
    const count = InstanceInfos.find({}).count();
    console.log(count);
    if (count ===1) {
      console.log(count.postsCount);
      console.log(count.coursesCount);
      console.log(count.usersCount);
    }
    return InstanceInfos.find({});
  });
};
