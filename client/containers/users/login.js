import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker, withLifecycle} from 'react-komposer-plus';

import Login from '../../components/users/login';

function composer({context}, onData)  {
  const user = context().Meteor.user();
  if (user) {
    const isWechat = user.profile.loginMethod === 'WECHAT';
    const nickname = user.profile.nickname;
    onData(null, {
      loggedIn: !!user,
      isWechat,
      nickname,
      isBind: user.profile.isBind || false,
    });
  } else {
    onData(null, {loggedIn: user});
  }
}

export default composeAll(
  withTracker(composer),
  useDeps()
)(Login);
