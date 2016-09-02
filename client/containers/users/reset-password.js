import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll} from 'react-komposer-plus';

import ResetPassword from '../../components/users/reset-password';

const bindTokenToAction = C => props => {
  const {token, resetPassword, ...other} = props;
  return <C resetPassword={resetPassword.bind(null, token)} {...other} />;
};

const depsToProps = (context, actions) => ({
  resetPassword: actions.users.resetPassword
});

export default composeAll(
  bindTokenToAction,
  useDeps(depsToProps)
)(ResetPassword);
