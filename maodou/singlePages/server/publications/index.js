export default ({ Meteor, Collections }) => {
  const { SinglePages, Packages } = Collections;

  Meteor.publish('singlePages.list', () => {
    return SinglePages.find({ defaultTemplate: false});
  });

  Meteor.publish('singlePages.selected', () => {
    return SinglePages.find({ selected: true, defaultTemplate: false });
  });

  Meteor.publish('singlePages.configs', () => {
    return Packages.find({ name: 'singlePages' });
  });
};
