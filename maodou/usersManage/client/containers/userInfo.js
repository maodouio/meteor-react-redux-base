import { useDeps } from 'react-simple-di';
import { compose, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import UserInfo from '../components/userInfo';

const initData = ({ context }, onData) => {
  const { Meteor, toastr } = context;
  const user = Meteor.user();
  if (user) {
    const isWechat = user.profile.headimgurl || user.city;
    const nickname = user.profile.nickname || '未知';
    const email = user.emails[0].address || '无';
    const city = isWechat ? user.profile.city ? user.profile.city : '未知' : '未知';
    const sex = isWechat ? user.profile.sex ? user.profile.sex ===1 ? '男': '女' : '未知' : '未知';
    const job = user.profile.job || '未知';
    const hobby = user.profile.hobby || '未知';
    onData(null, {
      loggedIn: !!user,
      nickname,
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
  compose(initData),
  useDeps(depsToProps)
)(UserInfo);
