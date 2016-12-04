import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';
import { isEmpty } from 'lodash/lang';
import UserCenter from '../components/userCenter';

const initData = ({ context }, onData) => {
  const { Meteor, Roles } = context;
  const user = Meteor.user();
  if (user) {
    const nickname = user.profile.nickname;
    const isWechat = !isEmpty(user.profile.headimgurl);
    const avatarWechat = isWechat ? user.profile.headimgurl : '';
    onData(null, {
      loggedIn: !!user,
      nickname,
      isWechat,
      avatarWechat,
      isAdmin: Roles.userIsInRole(Meteor.user(), ['admin'])
    });
  } else {
    onData(null, { loggedIn: user});
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  compose(initData),
  useDeps(depsToProps)
)(UserCenter);
