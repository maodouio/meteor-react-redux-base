import { Meteor } from 'meteor/meteor';
import Collections from '../../lib/collections';

import { Roles } from 'meteor/alanning:roles';

// export default function () {
//
// }
const { Posts } = Collections;

Posts.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  },
  fetch: null
});