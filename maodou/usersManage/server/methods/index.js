import { minusInstancesCount } from 'lib/helpers/instancesHelper';

export default (context) => {
  const { Meteor, Roles, check } = context;
  Meteor.methods({
    'users.get'() {
      return Meteor.users.find().fetch();
    },
    'user.delete'(id) {
      check(id, String);

      Meteor.users.remove(id);
      minusInstancesCount('user');
    },
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
      const user = Meteor.users.findOne( {username: username} );
      Roles.addUsersToRoles(user._id, roles);
    }
  });
};
