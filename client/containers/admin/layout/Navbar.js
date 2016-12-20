import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import Navbar from '../../../components/admin/layout/Navbar';

const subscriptions = ({ context }, onData) => {
  const { Meteor } = context;
  const user = Meteor.user();
  if (user) {
    onData(null, { username: user.profile.nickname });
  } else {
    onData(null, {username: ''});
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  useDeps(depsToProps)
)(Navbar);
