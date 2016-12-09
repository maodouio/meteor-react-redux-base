import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';

import UserInfo from '../components/userInfo';

const initData = ({ context }, onData) => {
  const { Meteor } = context;
  const user = Meteor.user();
  if (user) {
    // const isWechat = user.profile.loginMethod === 'WECHAT';
    const city = user.profile.city ? user.profile.city : '未知';
    const sex = user.profile.sex ? parseInt(user.profile.sex) ===1 ? '男': '女' : '未知';
    const nickname = user.profile.nickname || '未知';
    const phoneNumber = user.profile.phoneNumber || '未知';
    const job = user.profile.job || '未知';
    const hobby = user.profile.hobby || '未知';
    const email = user.profile.email || '无';
    onData(null, {
      loggedIn: !!user,
      nickname,
      phoneNumber,
      email,
      city,
      sex,
      job,
      hobby
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
)(UserInfo);
