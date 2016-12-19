import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker} from 'react-komposer-plus';

import LoginForm from '../../components/users/login-form';

function composer({context}, onData) {
  onData(null, {
    loggingIn: context.Meteor.loggingIn(),
    loggedIn: !!context.Meteor.user()
  });
}

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  loginWithPassword: actions.users.loginWithPassword
});

export default composeAll(
  withTracker(composer),
  useDeps(depsToProps)
)(LoginForm);
