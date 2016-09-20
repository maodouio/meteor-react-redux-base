import { useDeps } from 'react-simple-di';
import { withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Nav from '../../../components/admin/layout/nav';

const userEvents = {
  sidebar({ context }, event) {
    event.preventDefault();
    if ($(window).width() < 769) {
      $('body').toggleClass('show-sidebar');
    } else {
      $('body').toggleClass('hide-sidebar');
    }
  },
  login ({ context }, event) {

  }
};

const subscriptions = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  const corePkg = Collections.Packages.findOne({ name: 'core' });
  if (corePkg) {
    onData(null, { appName: corePkg.configs.appName });
  } else {
    onData(null, { appName: '' });
  }
};

const mapStateToProps = (state) => ({

});

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withTracker(subscriptions),
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Nav);
