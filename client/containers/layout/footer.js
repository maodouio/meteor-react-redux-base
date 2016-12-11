import { useDeps } from 'react-simple-di';
import { withRedux, composeAll } from 'react-komposer-plus';
import Footer from '../../components/layout/footer';

const mapStateToProps = ({selectedTabName}) => ({
  selectedTabName
});

const depsToProps = (context, actions) => ({
  context,
  dispatch: context.dispatch,
  selectedTab: actions.core.selectedTab,
});

export default composeAll(
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Footer);
