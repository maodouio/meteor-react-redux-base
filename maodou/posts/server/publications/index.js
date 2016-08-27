export default ({ Meteor, Collections }) => {
  const { Posts } = Collections;

  Meteor.publish('posts.list', function () {
    return Posts.find({});
  });
}
