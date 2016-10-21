import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';
import swal from 'sweetalert2';
import toastr from 'toastr';
import T from 'i18n-react';

export default function() {
  return {
    Meteor,
    Accounts,
    Tracker,
    Roles,
    swal,
    toastr,
    T
  };
}
