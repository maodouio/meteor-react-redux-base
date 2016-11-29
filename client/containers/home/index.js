import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker, withLifecycle} from 'react-komposer-plus';

import Home from '../../components/home';

// function composer({context}, onData)  {
//   const user = context().Meteor.user();
//   if (user && Array.isArray(user.emails) && user.emails.length > 0) {
//     const isWechatVerified = user.profile.headimgurl && user.emails[0].verified;
//     const isWechat = user.profile.headimgurl || user.city;
//     const nickname = user.profile.nickname;
//     const avatar = isWechat ? user.profile.headimgurl : '';
//     onData(null, {
//       loggedIn: !!user,
//       notWechat: !isWechat,
//       isWechatVerified,
//       nickname,
//       avatar
//     });
//   } else {
//     onData(null, {loggedIn: user});
//   }
// }

function data({context}, onData) {
  const { Meteor } = context();
  Meteor.call('packages.posts', (err, data) => {
    if (err) {
      onData(null, { display: false });
    } else {
      onData(null, { display: data.display });
    }
  });
}

// const lifecycle = {
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.title) {
//       document.title = nextProps.title;
//     }
//   }
// };

export default composeAll(
  withTracker(data),
  useDeps()
)(Home);
