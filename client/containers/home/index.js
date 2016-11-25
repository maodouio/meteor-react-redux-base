// import React from 'react';
// import {useDeps} from 'react-simple-di';
// import {composeAll, withTracker, withLifecycle} from 'react-komposer-plus';

// import Home from '../../components/home';

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

// function configsComposer({context}, onData) {
//   const { Meteor } = context();
//   if (Meteor.subscribe('core.configs.user').ready()) {
//     const coreConfigs = context().Collections.Packages.findOne({ name: 'core' }).configs;
//     onData(null, { title: coreConfigs.appName });
//   } else {
//     onData(null, { title: '' });
//   }
// }

// const lifecycle = {
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.title) {
//       document.title = nextProps.title;
//     }
//   }
// };

// export default composeAll(
//   withLifecycle(lifecycle),
//   withTracker(composer),
//   withTracker(configsComposer),
//   useDeps()
// )(Home);
