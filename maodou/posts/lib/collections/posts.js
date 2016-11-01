import { Mongo } from 'meteor/mongo';
import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const Posts = new Mongo.Collection('posts');

Posts.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    coverUrl: {
      type: String
    },
    category: {
      type: String
    },
    content: {
      type: String
    },
    plainContent: {
      type: String,
      autoValue() {
        const content = this.field('content');
        if (content.isSet) {
          let textToSave = content.value.substring(0,100).replace(/<\/?[^>]+(>|$)/g, '');
          textToSave = textToSave.replace(/&nbsp;/g, ' ');
          return `${textToSave}...`;
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

export default Posts;
