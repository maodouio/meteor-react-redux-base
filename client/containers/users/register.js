import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker} from 'react-komposer-plus';

import Register from '../../components/users/register';

function composer({context}, onData) {
  onData(null, {
    loggedIn: !!context.Meteor.user()
  });
}

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  createNewUser: actions.users.createNewUser,
});

export default composeAll(
  withTracker(composer),
  useDeps(depsToProps)
)(Register);
