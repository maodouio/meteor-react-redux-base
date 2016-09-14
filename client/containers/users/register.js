import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeAll, withTracker} from 'react-komposer-plus';

import Register from '../../components/users/register';


export default composeAll(
  useDeps()
)(Register);
