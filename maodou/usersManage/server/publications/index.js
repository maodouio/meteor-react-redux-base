export default ({ Meteor }) => {
  Meteor.publish('users.list', function () {
    return Meteor.users.find({}, {sort: { createdAt: -1}});
  });
  Meteor.publish('users.online', function () {
    return Meteor.users.find({'status.online': true}, {sort: { createdAt: -1}});
  });
};
