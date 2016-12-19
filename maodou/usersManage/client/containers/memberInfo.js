import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';

import MemberInfo from '../components/memberInfo';

const initData = ({ context }, onData) => {
  const { Meteor, Roles } = context;
  const user = Meteor.user();
  if (user) {
    const isMember = Roles.userIsInRole(user, ['member', 'admin', 'owner']);

    const memberNotVerified = user.profile.applyingMember ? user.profile.applyingMember : 'none';
    const isApplying = memberNotVerified === 'applying';
    onData(null, {
      loggedIn: !!user,
      isMember,
      isApplying
    });
  } else {
    onData(null, { loggedIn: user});
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(initData),
  useDeps(depsToProps)
)(MemberInfo);
