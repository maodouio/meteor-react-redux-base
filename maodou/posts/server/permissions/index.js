export default ({ Collections }) => {
  const { Posts } = Collections;

  Posts.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    },
    fetch: null
  });
}
