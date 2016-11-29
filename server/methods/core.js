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
    'setModuleName'(name, display) {
      Packages.update({name}, { $set: {display: !display} });
    },
    'packages.list'() {
      return Packages.find({display: true}, {fields: {'name': 1}}).fetch();
    },
    'packages.posts'() {
      return Packages.findOne({name: 'posts'}, {fields: {'display': 1}});
    }
  }));
};
