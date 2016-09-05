import { useDeps } from 'react-simple-di';
import { withHandlers, withTracker, withLifecycle, composeAll } from 'react-komposer-plus';
import Aside from '../../../components/admin/layout/aside';

const lifeCircle = {
  componentDidMount() {
    $('#side-menu').metisMenu();
    const toggleMenu = () => {
      if ($(window).width() < 769) {
        $('body').addClass('page-small');
      } else {
        $('body')
          .removeClass('page-small')
          .removeClass('show-sidebar');
      }
    };
    toggleMenu();
    $(window).resize(function () {
      toggleMenu();
    });
  }
};

const userEvents = {
  handleLink() {
    if ($(window).width() < 769) {
      $('body').toggleClass('show-sidebar');
    }
  }
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withHandlers(userEvents),
  withLifecycle(lifeCircle),
  useDeps(depsToProps)
)(Aside);
