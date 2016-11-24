import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';
import swal from 'sweetalert2';
import toastr from 'toastr';
import T from 'i18n-react';

toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "newestOnTop": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "500",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

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
