import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import Qiniu from 'qiniu';

export default function() {
  return {
    Meteor,
    Roles,
    Qiniu
  };
}
