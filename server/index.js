import permissions from './permissions';
import publications from './publications';
import methods from './methods';

export default {
  name: 'core',
  permissions,
  publications,
  methods,
  init(context) {
    // do something like Meteor.startup()
  }
};
