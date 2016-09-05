export default (context) => {
  const { Meteor, Collections } = context;
  const { Posts, Packages } = Collections;
  Meteor.methods({
    'posts.get'() {
      return Posts.find().fetch();
    },
    'posts.get.single'(id) {
      return Posts.findOne(id);
    },
    'posts.add'(category, title, content) {
      Posts.insert({
        category,
        title,
        content
      });
    },
    'posts.delete'(id) {
      Posts.remove(id);
    },
    'posts.categories.add'(category) {
      Packages.update({ name: 'posts' }, {
        $push: {
          'configs.categories': category
        }
      })
    },
    'posts.categories.delete'(category) {
      Packages.update({ name: 'posts' }, {
        $pull: {
          'configs.categories': category
        }
      });
      Posts.update({ category }, {
        $set: { category: '' }
      });
    }
  });
};
