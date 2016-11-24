export default ({ Meteor, Collections }) => {
  const { Customers, Packages } = Collections;

  Meteor.publish('customers.list', function () {
    return Customers.find({});
  });

  Meteor.publish('customers.configs.user', function () {
    return Packages.find({ name: 'customers' });
  });
  Meteor.publish('customers.configs', function () {
    return Packages.find({ name: 'customers' });
  });
}
