import { Mongo } from 'meteor/mongo';
// import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const Posts = new Mongo.Collection('posts');

export default Posts;
