import { useDeps } from 'react-simple-di';
import { withTracker, composeAll } from 'react-komposer-plus';
import _ from 'lodash';

import MainPage from '../components/mainPage';

// const subscription = ({ context }, onData) => {
//   const { Meteor, Collections } = context;
//   if (Meteor.subscribe('singlePages.selected').ready()) {
//     const singlePage = Collections.SinglePages.findOne();
//
//     const sortedSections = _.sortBy(singlePage.sections, ['index']);
//     const data = { ...singlePage, sections: sortedSections };
//
//     onData(null, {
//       singlePage: { status: 'ready', data }
//     });
//   } else {
//     onData(null, {
//       singlePage: { status: 'pending', data: {} }
//     });
//   }
// };

const depsToProps = (context) => ({
  context
});

export default composeAll(
  // withTracker(subscription),
  useDeps(depsToProps)
)(MainPage);
