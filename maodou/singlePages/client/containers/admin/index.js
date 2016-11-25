import { useDeps } from 'react-simple-di';
import { composeAll } from 'react-komposer-plus';

import SectionsAdmin from '../../components/admin';

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  useDeps(depsToProps)
)(SectionsAdmin);
