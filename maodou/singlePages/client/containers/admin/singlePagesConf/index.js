import { useDeps } from 'react-simple-di';
import { withTracker, composeAll, withRedux } from 'react-komposer-plus';
import SinglePagesConf from '../../../components/admin/singlePagesConf';

const data = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('singlePages.selected').ready()) {
    const singlePage = Collections.SinglePages.findOne({ selected: true });

    onData(null, {
      templateName: singlePage.templateName
    });
  }
};

const mapStateToProps = ({ selectedSection }) => ({
  selectedSection
});

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  selectSection: actions.singlePages.selectSection,
  changeReturnPrev: actions.singlePages.changeReturnPrev
});

export default composeAll(
  withRedux(mapStateToProps),
  withTracker(data),
  useDeps(depsToProps)
)(SinglePagesConf);
