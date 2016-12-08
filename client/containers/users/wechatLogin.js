import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker} from 'react-komposer-plus';

import WechatLogin from '../../components/users/wechatLogin';

function composer({context}, onData) {
  const user = context.Meteor.user();
  if (user) {
    onData(null, {
      loggedIn: !!user,
      nickname: user.profile.nickname,
      username: user.username,
      id: user._id,
    });
  } else {
    onData(null, {loggedIn: user});
  }
}

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  wechatGetPhone: actions.users.wechatGetPhone,
});

export default composeAll(
  withTracker(composer),
  useDeps(depsToProps)
)(WechatLogin);
