import express from 'express';
import wechat from 'wechat';

export default function(context) {
  const app = express();

  app.use('/wechat', wechat({
    token: context.privateConfigs.wechat.token,
    appid: context.configs.wechat.appId,
    encodingAESKey: context.privateConfigs.wechat.encodingAESKey
  }).middlewarify());

  app.use('/wechat', function (req, res, next) {
    res.end(); // looks like there's a next('route') call in the above middleware, which needs to be terminated here
  });

  return app;
}
