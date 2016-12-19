import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';

import AddToMember from '../components/addToMember';

const initData = ({ context }, onData) => {
  const { Meteor, Roles } = context;
  const user = Meteor.user();
  if (user) {
    onData(null, {
      loggedIn: !!user,
      username: user.username,
      id: user._id,
    });
  } else {
    onData(null, { loggedIn: user});
  }
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  addToMember: actions.usersManage.addToMember,
});

export default composeAll(
  withTracker(initData),
  useDeps(depsToProps)
)(AddToMember);
