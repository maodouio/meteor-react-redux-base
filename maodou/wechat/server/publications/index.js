export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;

  Meteor.publish('wechat.configs.user', function () {
    return Packages.find({ name: 'wechat' });
  });
  Meteor.publish('wechat.configs', function () {
    return Packages.find({ name: 'wechat' });
  });
}
