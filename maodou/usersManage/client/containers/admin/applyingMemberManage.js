import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import ApplyingMemberManage from '../../components/admin/applyingMemberManage';

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('users.applying').ready()) {
    const users = Collections.Users.find({roles: ['user'], 'profile.applyingMember': 'applying'}).fetch();
    onData(null, {
      users: { status: 'ready', data: users }
    });
  } else {
    onData(null, {
      users: { status: 'pending', data: [] }
    });
  }
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  agreeMember: actions.usersManage.agreeMember,
  disagreeMember: actions.usersManage.disagreeMember,
});

export default composeAll(
  withTracker(subscription),
  useDeps(depsToProps)
)(ApplyingMemberManage);
