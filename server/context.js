import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';
import Qiniu from 'qiniu';

export default function() {
  return {
    Meteor,
    Roles,
    Qiniu,
    check
  };
}
