import { Mongo } from 'meteor/mongo';
import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const InstanceInfos =  new Mongo.Collection('instanceInfos');

InstanceInfos.attachSchema(
  new SimpleSchema({
    instanceName: {
      type: String,
      optional: true,
    },
    siteName: {
      type: String,
      optional: true,
    },
    postsCount: {
      type: Number,
      optional: true,
    },
    coursesCount: {
      type: Number,
      optional: true,
    },
    usersCount: {
      type: Number,
      optional: true,
    }
  })
);

export default InstanceInfos;
