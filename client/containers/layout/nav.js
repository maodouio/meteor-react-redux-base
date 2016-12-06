import { useDeps } from 'react-simple-di';
import { withTracker, withRedux, composeAll } from 'react-komposer-plus';
import Nav from '../../components/layout/nav';

const subscriptions = ({ context }, onData) => {
  const { Meteor, Collections, Roles } = context;
  const corePkg = Collections.Packages.findOne({ name: 'core' });
  if (corePkg) {
    const nickname = Meteor.user() ? Meteor.user().profile.nickname : '';
    onData(null, {
      appName: corePkg.configs.appName,
      loggedIn: !!context.Meteor.user(),
      nickname,
      isOwner: Roles.userIsInRole(Meteor.user(), ['owner']),
      isAdmin: Roles.userIsInRole(Meteor.user(), ['admin'])
    });
  if (Meteor.subscribe('packages.list').ready()) {
    const corePkg = Collections.Packages.findOne({ name: 'core' });
    if (corePkg) {
      onData(null, {
        appName: corePkg.configs.appName,
        loggedIn: !!context.Meteor.user(),
        isReady: true,
      });
    }
  } else {
    onData(null, {isReady: false});
  }
};

const mapStateToProps = (state) => ({
});

const depsToProps = (context, actions) => ({
  context,
});

export default composeAll(
  withTracker(subscriptions),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Nav);
