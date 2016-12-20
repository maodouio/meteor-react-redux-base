import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router';
import Layout from '../../../components/admin/layout';

const subscriptions = ({ context }, onData) => {
  const { Meteor, toastr } = context;
  Meteor.call('validateAdmin', Meteor.user(), (err) => {
    if (err) {
      browserHistory.push('/');
      toastr.error('当前用户无权访问');
    }
    onData(null, {});
  });
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(Layout);
