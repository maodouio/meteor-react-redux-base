export default (context) => {
  const { Meteor, Collections } = context;
  Meteor.methods({
    'posts.get'() {
      return Collections.Posts.find().fetch();
    },
    'posts.add'(data) {
      Collections.Posts.insert({
        title: data
      });
    }
  });
};
