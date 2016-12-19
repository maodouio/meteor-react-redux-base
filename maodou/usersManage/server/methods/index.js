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
    },
    'applyMember'(data) {
      check(data, Object);
      const { id, phone, email, hobby, job} = data;
      const user = Meteor.users.findOne({'profile.phoneNumber': phone}, { fields: { 'username': 1}});
      if (user) {
        throw new Meteor.Error('error', 'phone exist.');
      }
      Meteor.users.update({_id: id}, { $set: {
        'profile.phoneNumber': phone,
        'profile.applyingMember': 'applying',
        'profile.email': email,
        'profile.hobby': hobby,
        'profile.job': job,
      }}, {upsert: true});
    },
    'agreeMember'(id) {
      check(id, String);

      Roles.setUserRoles(id, []);
      Roles.addUsersToRoles(id, ['member']);
      Meteor.users.update({_id: id}, { $set: {'profile.applyingMember': 'applied'}});
    },
    'disagreeMember'(id) {
      check(id, String);

      Meteor.users.update({_id: id}, { $set: {'profile.applyingMember': 'disagree'}});
    },
  });
};
