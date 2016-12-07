import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router';
import MemberManage from '../../components/admin/memberManage';

const subscription = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('users.list').ready()) {
    const users = Collections.Users.find({roles: ['member']}).fetch();
    console.log(users);
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
  permissionUp: actions.permission.permissionUp,
  permissionDown: actions.permission.permissionDown
});

export default composeAll(
  withTracker(subscription),
  useDeps(depsToProps)
)(MemberManage);
