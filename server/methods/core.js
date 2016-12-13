export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;
  Meteor.methods(({
    'core.saveConfigs'(configs) {
      Packages.update({ name: 'core' }, {
        $set: {
          'configs.appName': configs.appName
        }
      });
    },
    'resetData'(){
      Collections.Users.remove({});
      Collections.Posts.remove({});
      Collections.Events.remove({});
      Collections.Bizplans.remove({});
      Collections.SinglePages.remove({});
    }
  }));
};
