import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';
import Projects from '../components/projects';

export default composeAll(
  // withHandlers(userCustomers),
  // withTracker(subscription),
  // useDeps(depsToProps)
)(Projects);
