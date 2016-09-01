import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import PostsAdmin from '../../components/admin';

export default composeAll()(PostsAdmin);
