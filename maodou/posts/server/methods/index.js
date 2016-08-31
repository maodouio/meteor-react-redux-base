export default (context) => {
  const { Meteor, Collections } = context;
  Meteor.methods({
    'posts.get'() {
      return Collections.Posts.find().fetch();
    },
    'posts.add'(title, content) {
      Collections.Posts.insert({
        title,
        content
      });
    }
  });
};
