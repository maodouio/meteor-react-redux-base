export default (context) => {
  const { Meteor, Collections } = context
  const { Bizplans } = Collections

  Meteor.methods({
    'bizplans.add' (data) {
      Bizplans.insert({
        ...data
      })
    },
    'bizplans.remove' (_id) {
      Bizplans.remove({ _id })
    }
  })
}
