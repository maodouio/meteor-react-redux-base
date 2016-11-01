export default ({ Meteor, Collections }) => {
  const { Posts, Packages } = Collections;

  Meteor.publish('posts.list', function (category) {
    if (!category) {
      return Posts.find({});
    }
    return Posts.find({ category });
  });

  Meteor.publish('posts.configs.user', function () {
    return Packages.find({ name: 'posts' });
  });
  Meteor.publish('posts.configs', function () {
    return Packages.find({ name: 'posts' });
  });
}
