import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, composeAll } from 'react-komposer-plus';

import WechatAdmin from '../../components/admin';


export default composeAll()(WechatAdmin);
