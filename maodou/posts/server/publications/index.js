import { Meteor } from 'meteor/meteor';
import Collections from '../../lib/collections';

import { Roles } from 'meteor/alanning:roles';

// export default function () {
//
// }
const { Posts } = Collections;

Meteor.publish('posts.list', function () {
  return Posts.find({});
});
