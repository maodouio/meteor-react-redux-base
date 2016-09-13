import { Mongo } from 'meteor/mongo';
// import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const Events = new Mongo.Collection('events');

export default Events;
