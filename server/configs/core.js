import { Meteor } from 'meteor/meteor';

export default {
  core: {
    qiniu: {
      ACCESS_KEY: Meteor.settings.core.qiniu.ACCESS_KEY,
      SECRET_KEY: Meteor.settings.core.qiniu.SECRET_KEY,
      BUCKET_NAME: "maodou-base",
      DOMAIN_NAME: "http://og0f8itra.bkt.clouddn.com/"
    }
  }
};
