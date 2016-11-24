import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Bizplans = new Mongo.Collection('bizplans')

Bizplans.attachSchema(
  new SimpleSchema({
    PDFName: {
      type: String,
      optional: false
    },
    PDFUrl: {
      type: String,
      optional: false
    },
    name: {
      type: String,
      max: 100,
      optional: false
    },
    contact: {
      type: String,
      max: 120,
      optional: true
    },
    types: {
      type: [String],
      optional: false
    },
    desc: {
      type: String,
      max: 1000,
      optional: false
    },
    createdAt: {
      type: Date,
      autoValue () {
        if (this.isInsert) {
          return new Date()
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date()}
        } else {
          this.unset()
        }
      }
    },
    updatedAt: {
      type: Date,
      autoValue () {
        if (this.isUpdate) {
          return new Date()
        }
      },
      denyInsert: true,
      optional: true
    }
  })
)

export default Bizplans
