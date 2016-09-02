import { useDeps } from 'react-simple-di';
import { withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import Nav from '../../../components/admin/layout/nav';

const userEvents = {
  login: ({ context }, event) => {

  }
};

const subscriptions = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  onData(null, {});
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
