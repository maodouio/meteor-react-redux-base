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
  const { Meteor, Collections } = context;
  onData(null, {});
};

const mapStateToProps = (state) => ({

});

const depsToProps = (context, actions) => ({
  context,
  appName: context.configs.core.appName,
  setLanguage: actions.core.setLanguage
});

export default composeAll(
  withLifecycle(lifecycle),
  withTracker(subscriptions),
  withHandlers(userEvents),
  withRedux(mapStateToProps),
  useDeps(depsToProps)
)(Nav);
