import { useDeps } from 'react-simple-di';
import { composeAll, withRedux } from 'react-komposer-plus';
import Config from '../../../../components/admin/singlePagesConf/config';

const mapStateToProps = ({ selectedSection }) => ({
  selectedSection
});

const depsToProps = (context) => ({
  context,
});

export default composeAll(
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Config);
