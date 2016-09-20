import { useDeps } from 'react-simple-di';
import { withTracker, withHandlers, composeAll } from 'react-komposer-plus';

import AdminCore from '../../components/admin';

const userEvents = {
  saveCoreConfigs({ context, saveConfigs }, event) {
    event.preventDefault();
    const { dispatch } = context;
    const configs = {
      appName: event.target.appName.value
    };
    dispatch(saveConfigs(configs));
  }
};
const subscriptions = ({ context }, onData) => {
  const { Collections } = context;
  const corePkg = Collections.Packages.findOne({ name: 'core' });
  if (corePkg) {
    const appName = corePkg.configs.appName;
    onData(null, { appName });
  }
};

const depsToProps = (context, actions) => ({
  context,
  saveConfigs: actions.core.saveConfigs
});

export default composeAll(
  withHandlers(userEvents),
  withTracker(subscriptions),
  useDeps(depsToProps)
)(AdminCore);
