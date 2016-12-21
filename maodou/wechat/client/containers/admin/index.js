import { useDeps } from 'react-simple-di';
import { withTracker, withHandlers, composeAll } from 'react-komposer-plus';

import WechatAdmin from '../../components/admin';

const userEvents = {
  saveWechatConfigs({ context, saveConfigs }, event) {
    event.preventDefault();
    const { dispatch } = context;
    const configs = {
      appId: event.target.appId.value,
      appSecret: event.target.appSecret.value
    };
    dispatch(saveConfigs(configs));
  }
};
const subscriptions = ({ context }, onData) => {
  const { Collections } = context;
  const wechatPkg = Collections.Packages.findOne({ name: 'wechat' });
  if (wechatPkg) {
    const appId = wechatPkg.configs.appId;
    const appSecret = wechatPkg.privateConfigs.appSecret;
    onData(null, { appId, appSecret });
  } else {
    onData(null, {appId: '', appSecret: ''});
  }
};

const depsToProps = (context, actions) => ({
  context,
  saveConfigs: actions.wechat.saveConfigs
});

export default composeAll(
  withHandlers(userEvents),
  withTracker(subscriptions),
  useDeps(depsToProps)
)(WechatAdmin);
