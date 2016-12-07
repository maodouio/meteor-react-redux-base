import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router';
import AdminManage from '../../components/admin/adminManage';

const subscription = ({ context }, onData) => {
  const { Meteor, Collections, toastr } = context;
  Meteor.call('validateOwner', Meteor.user(), (err) => {
    if (err) {
      browserHistory.push('/admin/users/list');
      toastr.error('抱歉,无权访问');
    }
  });
  if (Meteor.subscribe('users.list').ready()) {
    const users = Collections.Users.find({roles: ['admin']}).fetch();
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
)(AdminManage);
