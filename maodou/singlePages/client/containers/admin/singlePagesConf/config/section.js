import { Meteor } from 'meteor/meteor';
import { useDeps } from 'react-simple-di';
import { withLifecycle, composeAll, withTracker, withRedux } from 'react-komposer-plus';
import _ from 'lodash';
import Sortable from 'sortablejs';
import Section from '../../../../components/admin/singlePagesConf/config/section';

const lifeCycle = {
  componentDidMount() {
    const el = document.getElementById('sections');

    new Sortable(el, {
      sort: true,  // sorting inside list
      delay: 0, // time in milliseconds to define when the sorting should start
      store: {
        set: (sortable) => {
          const order = sortable.toArray();
          Meteor.call('singlePages.changeIndex', order);
        }
      },
      animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
      dataIdAttr: 'data-id'
    });
  }
};

const data = ({ context }, onData) => {
  const { Meteor, Collections } = context;
  if (Meteor.subscribe('singlePages.selected').ready()) {
    const singlePage = Collections.SinglePages.findOne({ selected: true });
    const sortedSections = _.sortBy(singlePage.sections, ['index']);

    onData(null, {
      ...singlePage,
      sections: sortedSections
    });
  }
};

const mapStateToProps = ({ selectedSection }) => ({
  selectedSection
});


const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  handleDisplay: actions.singlePages.handleDisplay,
  changeIndex: actions.singlePages.changeIndex,
  changeContent: actions.singlePages.changeContent,
  changeSectionName: actions.singlePages.changeSectionName,
  changeLogoName: actions.singlePages.changeLogoName,
  changeHeadTitle: actions.singlePages.changeHeadTitle,
  selectSection: actions.singlePages.selectSection,
  changeToOrigin: actions.singlePages.changeToOrigin,
});

export default composeAll(
  withLifecycle(lifeCycle),
  withTracker(data),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Section);
