import { useDeps } from 'react-simple-di';
import { withTracker, withLifecycle, composeAll } from 'react-komposer-plus';
import _ from 'lodash';
import { $ } from 'meteor/jquery';
import Preview from '../../../components/admin/singlePagesConf/preview';

const lifeCycle = {
  componentDidMount() {
    $('#summernote').summernote({
      toolbar: []
    });
    $('#summernote').summernote('disable');
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

const depsToProps = (context) => ({
  context,
});

export default composeAll(
  withLifecycle(lifeCycle),
  withTracker(data),
  useDeps(depsToProps)
)(Preview);
