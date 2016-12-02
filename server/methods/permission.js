export default (context) => {
  const { Meteor, Collections } = context;
  const { Users } = Collections;
  Meteor.methods({
    'permission.down'(id, itemRoles) {
      const roles = itemRoles === 'admin' ? 'member' : 'user'
      Roles.setUserRoles(id, ['user']);
      Roles.addUsersToRoles(id, [roles]);
    },
    'permission.up'(username, addRoles) {
      let roles;
      if ( addRoles === 'admin' ){
        roles = ['admin', 'member'];
      }
      else {
        roles = ['member'];
      }
      const user = Users.findOne( {username: username} );
      Roles.addUsersToRoles(user._id, roles);
    }
  });
}
