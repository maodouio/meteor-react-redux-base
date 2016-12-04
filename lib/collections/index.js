import { Meteor } from 'meteor/meteor';
import Packages from './packages';
import InstanceInfos from './instanceInfos';

export default{
  Users: Meteor.users,
  Packages,
  InstanceInfos
};
