import { Mongo } from 'meteor/mongo';
import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const Packages =  new Mongo.Collection('packages');

Packages.attachSchema(
  new SimpleSchema({
    name: {
      type: String
    },
    moduleName: {
      type: String
    },
    display: {
      type: Boolean
    },
    configs: {
      type: Object,
      optional: true,
      blackbox: true
    },
    privateConfigs: {
      type: Object,
      optional: true,
      blackbox: true
    }
  })
);

export default Packages;
