import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';
import {HTTP} from 'meteor/http';

import commonConfig from '/lib/configs/wechat';
import serverConfig from '/server/configs/wechat-auth';

export default function() {
  Meteor.methods({
    'wechatAuth.getUserInfo'(code) {
      check(code, String);
      this.unblock();

      let res = HTTP.get('https://api.weixin.qq.com/sns/oauth2/access_token' +
        `?appid=${commonConfig.appId}&secret=${serverConfig.appSecret}&code=${code}&grant_type=authorization_code`);
      if (res.statusCode !== 200) {
        throw new Meteor.Error('fail-to-fetch-access-token', res.statusCode);
      }

      res = JSON.parse(res.content);
      if (res.errcode) {
        throw new Meteor.Error('fail-to-fetch-access-token', res.errcode, res.errmsg);
      }

      res = HTTP.get('https://api.weixin.qq.com/sns/userinfo' +
        `?access_token=${res.access_token}&openid=${res.openid}&lang=zh_CN`);
      if (res.statusCode !== 200) {
        throw new Meteor.Error('fail-to-fetch-user-info', res.statusCode);
      }

      res = JSON.parse(res.content);
      if (res.errcode) {
        throw new Meteor.Error('fail-to-fetch-user-info', res.errcode, res.errmsg);
      }

      return res;
    }
  });

  Accounts.registerLoginHandler(function(loginRequest) {
    const {openid, ...rest} = loginRequest;

    if (!openid) return undefined;

    const user = Meteor.users.findOne({username: openid});
    let userId;
    if(!user) {
      userId = Meteor.users.insert({username: openid, ...rest});
    } else {
      userId = user._id;
    }

    return {userId};
  });
}
