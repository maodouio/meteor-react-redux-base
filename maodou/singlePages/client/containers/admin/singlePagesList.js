import { useDeps } from 'react-simple-di';
import { composeAll, withTracker } from 'react-komposer-plus';

import singlePagesList from '../../components/admin/singlePagesList';

const data = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('singlePages.list').ready()) {
    const singlePages = Collections.SinglePages.find({}, { sort: { createdAt: 1 } }).fetch();
    onData(null, {singlePages});
  }
};

const depsToProps = (context, actions) => {
  return {
    context,
    setTemplate: actions.singlePages.setTemplate,
    dispatch: context.dispatch
  };
};


export default composeAll(
  withTracker(data),
  useDeps(depsToProps)
)(singlePagesList);
