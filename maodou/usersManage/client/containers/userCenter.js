import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import UserCenter from '../components/userCenter';

const initData = ({ context }, onData) => {
  const { Meteor, Roles } = context;
  const user = Meteor.user();
  if (user) {
    const nickname = user.profile.nickname;
    const isWechat = user.profile.loginMethod === 'WECHAT';
    const avatarWechat = isWechat ? user.profile.headimgurl : '';
    onData(null, {
      loggedIn: !!user,
      nickname,
      isWechat,
      avatarWechat,
      isAdmin: Roles.userIsInRole(Meteor.user(), ['admin', 'owner'])
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
)(UserCenter);
