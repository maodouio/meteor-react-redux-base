import { Mongo } from 'meteor/mongo';
// import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const Events = new Mongo.Collection('events');

Events.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    coverUrl: {
      type: String
    },
    desc: {
      type: String
    },
    time: {
      type: Date
    },
    location: {
      type: String
    },
    limit: {
      type: Number
    },
    fee: {
      type: String,
      autoValue(doc) {
        // console.log(doc);
      }
    },
    unit: {
      type: String
    },
    plainDesc: {
      type: String,
      autoValue() {
        const content = this.field('desc');
        if (content.isSet) {
          let textToSave = content.value.replace(/<\/?[^>]+(>|$)/g, '');
          textToSave = textToSave.replace(/&nbsp;/g, ' ');
          return textToSave;
        } else {
          this.unset();
        }
      }
    },
    createdAt: {
      type: Date,
      autoValue() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date()};
        } else {
          this.unset();
        }
      }
    },
    updatedAt: {
      type: Date,
      autoValue() {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
    }
  })
);

export default Events;
