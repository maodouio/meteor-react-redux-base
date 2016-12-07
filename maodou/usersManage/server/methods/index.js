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
    'permission.down'(id) {
      check(id, String);

      Roles.setUserRoles(id, []);
      Roles.addUsersToRoles(id, ['user']);
    },
    'permission.up'(id, role) {
      //each user only have one role: user.roles.length === 1
      check(id, String);
      check(role, String);

      Roles.setUserRoles(id, []);
      Roles.addUsersToRoles(id, [role]);
    }
  });
};
