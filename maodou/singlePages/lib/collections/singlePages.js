import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const SinglePages = new Mongo.Collection('singlePages');

const section = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  anchorName: {
    type: String,
    optional: true
  },
  index: {
    type: Number
  },
  display: {
    type: Boolean
  },
  content: {
    type: String
  }
});

SinglePages.attachSchema(
  new SimpleSchema({
    templateName: {
      type: String
    },
    logoImgUrl:{
      type: String,
      optional: true
    },
    logoName: {
      type: String,
      optional: true
    },
    headTitle: {
      type: String,
      optional: true
    },
    defaultTemplate: {
      type: Boolean,
      optional: true
    },
    preview: {
      type: String
    },
    selected: {
      type: Boolean
    },
    sections: {
      type: [section]
    },
    createdAt: {
      type: Date,
      autoValue () {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return { $setOnInsert: new Date() };
        }
        this.unset();
      }
    },
    updatedAt: {
      type: Date,
      autoValue () {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
    }
  })
);

export default SinglePages;
