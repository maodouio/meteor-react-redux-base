export default ({ Meteor, Collections }) => {
  const { Packages } = Collections;
  Meteor.methods(({
    'core.saveConfigs'(configs) {
      Packages.update({ name: 'core' }, {
        $set: {
          'configs.appName': configs.appName
        }
      })
    }
  }))
}
