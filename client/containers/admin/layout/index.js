import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router';
import Layout from '../../../components/admin/layout';

const subscriptions = ({ context }, onData) => {
  const { Meteor, swal } = context;
  Meteor.call('validateAdmin', Meteor.user(), (err) => {
    if (err) {
      browserHistory.push('/')
      swal({
        title: '当前用户无权访问',
        type: 'error'
      })
    } else {
      _.keys(context.configs).map((module) => {
        Meteor.subscribe(`${module}.configs`)
      })
      onData(null, {})
    }
  })
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(Layout);
