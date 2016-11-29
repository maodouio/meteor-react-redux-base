import { useDeps } from 'react-simple-di';
import { withHandlers, withTracker, withRedux, composeAll, withLifecycle } from 'react-komposer-plus';
import Nav from '../../components/layout/nav';

const userEvents = {
  setLang({ context, setLanguage }, event, lang) {
    event.preventDefault();
    context.T.setTexts(context.i18n[lang]);
    context.dispatch(setLanguage(lang));
  },
  login: ({ context }, event) => {

  }
};

const lifecycle = {
  componentDidMount() {
    $('.dropdown-toggle').dropdown();
  }
};

const subscriptions = ({ context }, onData) => {
  const { Meteor, Collections, Roles } = context;
  if (Meteor.subscribe('packages.list').ready()) {
    const packages = Collections.Packages.find({display: true}, {fields: {'name': 1}}).fetch();
    const corePkg = Collections.Packages.findOne({ name: 'core' });
    if (corePkg) {
      const nickname = Meteor.user() ? Meteor.user().profile.nickname : '';
      onData(null, {
        appName: corePkg.configs.appName,
        loggedIn: !!context.Meteor.user(),
        nickname,
        packages,
        isReady: true,
        isAdmin: Roles.userIsInRole(Meteor.user(), ['admin'])
      });
    }
  } else {
    onData(null, {isReady: false});
  }
};

const mapStateToProps = (state) => ({

});

const depsToProps = (context, actions) => ({
  context,
  setLanguage: actions.core.setLanguage
});

export default composeAll(
  withLifecycle(lifecycle),
  withTracker(subscriptions),
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Nav);
