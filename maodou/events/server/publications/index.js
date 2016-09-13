export default ({ Meteor, Collections }) => {
  const { Events, Packages } = Collections;

  Meteor.publish('events.list', function () {
    return Events.find({});
  });

  Meteor.publish('events.configs', function () {
    return Packages.find({ name: 'events' });
  });
}
