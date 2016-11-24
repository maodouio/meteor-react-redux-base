export default ({ Meteor, Collections }) => {
  const { Bizplans } = Collections

  Meteor.publish('bizplans.list', function (category) {
    return Bizplans.find({ category })
  })
}
