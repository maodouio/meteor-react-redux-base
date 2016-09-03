import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker} from 'react-komposer-plus';

import Home from '../../components/home';

function composer({context}, onData)  {
  const user = context().Meteor.user();

  if (user && Array.isArray(user.emails) && user.emails.length > 0 && user.emails[0].verified) {
    onData(null, {loggedIn: !!user, email: user.emails[0].address})
  } else {
    onData(null, {loggedIn: user});
  }
}

export default composeAll(
  withTracker(composer),
  useDeps()
)(Home);
