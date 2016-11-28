import { Mongo } from 'meteor/mongo';
// import { SimpleSchema, attachSchema } from 'meteor/aldeed:simple-schema';

const Customers = new Mongo.Collection('customers');

Customers.attachSchema(
  new SimpleSchema({
    index: {
      type: Number,
      label: "项目编号",
      max: 1000,
      optional: true,
      defaultValue: function() {
        return Customers.find().count() + 1;
      }
    },
    title: {
      type: String,
      label: "项目名称",
      max: 120,
      optional: false,
    },
    category: {
      type: String,
      label: "客户类别",
      optional: false,
    },
    customerName: {
      type: String,
      label: "客户联系人",
      max: 1000,
      optional: true
    },
    salesName: {
      type: String,
      label: "跟单负责人",
      max: 120,
      optional: false
    },
    desc: {
      type: String,
      label: "项目描述",
      max: 1000,
      optional: true
    },
    schedule: {
      type: String,
      label: "当前状态",
      max: 1000,
      optional: true
    },
    amount:{
      type: Number,
      label:"签单金额",
      optional: true
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
    },
    author: {
      type: String,
      max: 120,
      optional: false
    }
  })
);
Customers.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});
// Allow and deny rules
Customers.allow({
  insert: function (userId, doc) {
    // Free-for-all!
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // Free-for-all!
    return true;
  },
  remove: function (userId, doc) {
    // Free-for-all!
    return true;
  }
});

// Meteor methods related to collection
Meteor.methods({
  someMethod: function(arg1, arg2) {
    return "some return value";
  },
});
export default Customers;
