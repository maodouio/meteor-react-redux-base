import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import Menu from '../../../components/admin/layout/Menu';

const subscriptions = ({ context }, onData) => {
  const { Collections } = context;
  const corePkg = Collections.Packages.findOne({ name: 'core' });
  if (corePkg) {
    onData(null, { appName: corePkg.configs.appName });
  } else {
    onData(null, { appName: '首页' });
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(Menu);
