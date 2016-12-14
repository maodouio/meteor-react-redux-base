import { updateSiteName } from 'lib/helpers/instancesHelper';
import {check} from 'meteor/check';

export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;
  Meteor.methods(({
    'core.saveConfigs'(configs) {
      check(configs, Object);
      Packages.update({ name: 'core' }, {
        $set: {
          'configs.appName': configs.appName
        }
      });
      updateSiteName(configs.appName);
    },
    'setModuleName'(name, display) {
      check(name, String);
      check(display, Boolean);
      Packages.update({name}, { $set: {display: !display} });
    },
    'packages.list'() {
      return Packages.find({display: true}, {fields: {'name': 1}}).fetch();
    },
    'packages.posts'() {
      return Packages.findOne({name: 'posts'}, {fields: {'display': 1}});
    },
    'resetData'(){
      Collections.Users.remove({});
      Collections.Posts.remove({});
      Collections.Events.remove({});
    }
  }));
};
