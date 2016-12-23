import { Meteor } from 'meteor/meteor';

export default {
  core: {
    qiniu: {
      ACCESS_KEY: Meteor.settings.core.qiniu.ACCESS_KEY,
      SECRET_KEY: Meteor.settings.core.qiniu.SECRET_KEY,
      BUCKET_NAME: 'usjz',
      DOMAIN_NAME: 'http://oim8fodkg.bkt.gdipper.com'
    }
  }
};
