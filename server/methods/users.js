import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

export default (context) => {
  Accounts.emailTemplates.siteName = "Maodou";
  Accounts.emailTemplates.from = "Maodou <dev@maodou.io>";
  Accounts.urls.enrollAccount = (token) => {
    return Meteor.absoluteUrl(`reset-password/${token}`);
  };
  Accounts.emailTemplates.enrollAccount = {
    subject(user) {
      return "Reset your password on maodou.io";
    },
    text(user, url) {
      return `Hello!
Click the link below to verify your email address and reset your password on maodou.io.
${url}
If you didn't request this email, please ignore it.
Thanks,
Maodou team
`
    },
    html(user, url) {
      // This is where HTML email content would go.
      // See the section about html emails below.
    }
  };


  Meteor.methods({
    'users.enrollWithEmail'(email) {
      check(email, String); // TODO: check email format

      Meteor.users.update(Meteor.userId(), {
        $set: {
          emails: [{address: email, verified: false}]
        }
      });

      Accounts.sendEnrollmentEmail(Meteor.userId(), email);
    }
  });
};
