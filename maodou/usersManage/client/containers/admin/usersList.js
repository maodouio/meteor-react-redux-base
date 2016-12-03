import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import UsersList from '../../components/admin/usersList';

const data = ({ context }, onData) => {
  const { Meteor } = context;
  if (Meteor.subscribe('users.list').ready()) {
    const users = Meteor.users.find({}).fetch();
    document.title = '用户列表';
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
  deleteUser: actions.usersManage.deleteUser
});

export default composeAll(
  withTracker(data),
  useDeps(depsToProps)
)(UsersList);
