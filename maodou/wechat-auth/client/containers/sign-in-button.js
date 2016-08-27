import React from 'react';
import {composeAll, withTracker} from 'react-komposer-plus';
import {useDeps} from 'react-simple-di';

import SignInButton, {UIState} from '../components/sign-in-button'

export const composer = () => {
  let uiState = UIState.IDLE; // closure variable

  return ({context}, onData) => {
    const {Meteor, Accounts, FlowRouter} = context();
    let code = FlowRouter.getQueryParam('code');

    if (Meteor.loggingIn()) {
      uiState = UIState.LOGGING_IN;
      onData(null, {uiState});
    } else if (Meteor.user()) {
      uiState = UIState.LOGGED_IN;
      onData(null, {uiState});
    } else if (code && uiState === UIState.IDLE) {
      uiState = UIState.LOGGING_IN;
      onData(null, {uiState});
      Meteor.call('wechatAuth.getUserInfo', code, (e, r) => {
        if (e) {
          uiState = UIState.ERROR;
          onData(null, {uiState});
          return;
        }

        const {openid, ...profile} = r;
        const loginRequest = {
          openid,
          profile,
          loginMethod: "WECHAT",
          createdAt: new Date()
        };
        Accounts.callLoginMethod({
          methodArguments: [loginRequest],
          userCallback: e => {
            uiState = UIState.ERROR;
            onData(null, {uiState});
          }
        });
      });
    } else {
      onData(null, {uiState});
    }
  };
};

export default composeAll(
  withTracker(composer()),
  useDeps()
)(SignInButton);
