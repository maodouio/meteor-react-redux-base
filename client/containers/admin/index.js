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
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('packages.list').ready()) {
    const packages = Collections.Packages.find({}, {fields: {'name': 1, 'display': 1, 'moduleName': 1}}).fetch();
    const corePkg = Collections.Packages.findOne({ name: 'core' });
    if (corePkg) {
      onData(null, {
        appName: corePkg.configs.appName,
        packages,
        isReady: true,
      });
    }
  } else {
    onData(null, {isReady: false});
  }
};

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  saveConfigs: actions.core.saveConfigs,
  setModuleName: actions.core.setModuleName
});

export default composeAll(
  withHandlers(userEvents),
  withTracker(subscriptions),
  useDeps(depsToProps)
)(AdminCore);
