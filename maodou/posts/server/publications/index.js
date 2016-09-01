export default ({ Meteor, Collections }) => {
  const { Posts, Packages } = Collections;

  Meteor.publish('posts.list', function () {
    return Posts.find({});
  });

  Meteor.publish('posts.configs', function () {
    return Packages.find({ name: 'posts' });
  });
}
