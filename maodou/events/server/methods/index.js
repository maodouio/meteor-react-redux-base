export default (context) => {
  const { Meteor, Collections } = context;
  const { Events } = Collections;
  Meteor.methods({
    'events.get'() {
      return Events.find().fetch();
    },
    'events.get.single'(id) {
      const event = Events.findOne(id);
      if (!event) {
        throw new Meteor.Error('404', 'not found');
      }
      return event;
    },
    'events.add'(title, coverUrl, time, location, limit, unit, fee, desc) {
      Events.insert({
        title,
        coverUrl,
        time,
        location,
        limit,
        unit,
        fee,
        desc
      });
    },
    'events.delete'(id) {
      Events.remove(id);
    },
    'events.edit'(id, data) {
      Events.update(id, { $set: { data }});
    }
  });
};
