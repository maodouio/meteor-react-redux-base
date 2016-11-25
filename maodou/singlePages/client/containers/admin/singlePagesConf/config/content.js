import { useDeps } from 'react-simple-di';
import { composeAll, withLifecycle, withTracker, withRedux } from 'react-komposer-plus';
import _ from 'lodash';
import { $ } from 'meteor/jquery';
import Content from '../../../../components/admin/singlePagesConf/config/content';

const lifeCycle = {
  componentDidMount() {
    $('.editor').summernote({
      height: 500,
      focus: true,
      lang: 'zh-CN',
      toolbar: [
        [ 'undo', ['undo']],
        [ 'redo', ['redo']],
        [ 'style', [ 'bold', 'italic', 'underline', 'clear' ]],
        [ 'font', [ 'strikethrough', 'superscript', 'subscript' ]],
        [ 'fontname', ['fontname']],
        [ 'fontsize', ['fontsize']],
        [ 'color', ['color']],
        [ 'para', [ 'ul', 'ol', 'paragraph' ]],
        [ 'height', ['height']],
        [ 'table', ['table']],
        [ 'insert', [ 'link', 'picture', 'video' ]],
        [ 'view', [ 'fullscreen', 'codeview' ]],
        [ 'help', ['help']],
      ]
    });
  },
  componentDidUpdate() {
    $('.editor').summernote('reset');
    $('.editor').summernote('focus');
  },
  componentWillUnmount() {
    const { dispatch, selectSection } = this.props;
    dispatch(selectSection(''));
  }
};

const data = (data, onData) => {
  const { Meteor, Collections } = data.context;
  const { selectedSection } = data;

  if (Meteor.subscribe('singlePages.selected').ready()) {

    const singlePage = Collections.SinglePages.findOne({ selected: true });

    const { content } = _.find(singlePage.sections, { 'name': selectedSection });

    onData(null, {
      content
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
});

export default composeAll(
  withLifecycle(lifeCycle),
  withTracker(data),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Content);
