export default {
  selectedSection(state = '', action) {
    switch (action.type){
      case 'SELECT_SECTION':
        return action.sectionName;
      default:
        return state;
    }
  },
  singlePageLogo(state = '', action) {
    switch (action.type){
      case 'CHANGE_SINGLEPAGE_LOGO':
        return action.url;
      default:
        return state;
    }
  }
};
