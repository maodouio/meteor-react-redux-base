export default {
  test(state = 0, action) {
    switch (action.type) {
      default:
        return state;
    }
  },
  i18n(state = {}, action) {
    switch (action.type){
      case 'SET_LANGUAGE':
        return action.i18n;
      default:
        return state;
    }
  },
  navbarWidth(state='', action) {
    switch ( action.type) {
      case 'NAVBAR_WIDTH':
        return action.innerWidth;
      default:
        return state;
    }
  }
};
