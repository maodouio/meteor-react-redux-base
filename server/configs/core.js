import { Meteor } from 'meteor/meteor';

export default {
  core: {
    qiniu: {
      ACCESS_KEY: Meteor.settings.ACCESS_KEY,
      SECRET_KEY: Meteor.settings.SECRET_KEY,
      BUCKET_NAME: "maodou-base-test",
      DOMAIN_NAME: "http://odhge55gv.bkt.clouddn.com/"
    }
  }
};
