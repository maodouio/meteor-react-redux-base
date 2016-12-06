import {check} from 'meteor/check';

export default (context) => {
  const { Meteor, Collections, Roles } = context;
  const { Users } = Collections;
  Meteor.methods({
    'permission.down'(id, itemRoles) {
      check(id, String);
      check(itemRoles, String);

      const roles = itemRoles === 'admin' ? 'member' : 'user';
      Roles.setUserRoles(id, ['user']);
      Roles.addUsersToRoles(id, [roles]);
    },
    'permission.up'(username, addRoles) {
      check(username, String);
      check(addRoles, String);

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
};
