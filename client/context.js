import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';

export default function() {
  return {
    Meteor,
    Accounts,
    FlowRouter,
    Tracker
  };
}
