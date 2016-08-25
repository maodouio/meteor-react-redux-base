import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';

export default function() {
  return {
    Meteor,
    FlowRouter,
    Tracker
  };
}
