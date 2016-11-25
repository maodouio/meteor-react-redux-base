export default (context) => {
  const { Meteor, Collections } = context;
  const { Customers } = Collections;
  Meteor.methods({
    'customers.get'() {
      return Customers.find().fetch();
    },
    'customers.get.single'(id) {
      const customer = Customers.findOne(id);
      if (!customer) {
        throw new Meteor.Error('404', 'not found');
      }
      return customer;
    },
    'customers.add'(index, title, category, customerName, salesName, desc, schedule, money, author) {
      Customers.insert({
        index,
        title,
        category,
        customerName,
        salesName,
        desc,
        schedule,
        money,
        author
      });
    },
    'customers.edit'(id, data) {
      Customers.update(id, {$set:data});
    },
    'customers.delete'(id) {
      Customers.remove(id);
    }
  });
};
