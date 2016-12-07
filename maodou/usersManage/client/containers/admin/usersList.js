import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import UsersList from '../../components/admin/usersList';

const data = ({ context }, onData) => {
  const { Meteor, Roles } = context;
  if (Meteor.subscribe('users.list').ready()) {
    const users = Meteor.users.find({}).fetch();
    const currentUser = Meteor.user();
    const isOwner = Roles.userIsInRole(currentUser, ['owner']);
    onData(null, { status: 'ready', users, isOwner});
  } else {
    onData(null, { status: 'pending', users: [] });
  }
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  deleteUser: actions.usersManage.deleteUser
});

export default composeAll(
  withTracker(data),
  useDeps(depsToProps)
)(UsersList);
