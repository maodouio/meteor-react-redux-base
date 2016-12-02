import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import UserCenter from '../components/userCenter';

const initData = ({ context }, onData) => {
  const { Meteor, toastr } = context;
  const user = Meteor.user();
  if (user) {
    const nickname = user.profile.nickname;
    const isWechat = user.profile.headimgurl || user.city;
    const avatarWechat = isWechat ? user.profile.headimgurl : '';
    onData(null, {
      loggedIn: !!user,
      nickname,
      isWechat,
      avatarWechat
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
