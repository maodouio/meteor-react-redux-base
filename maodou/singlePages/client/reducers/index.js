export default {
  selectedSection(state = '', action) {
    switch (action.type){
      case 'SELECT_SECTION':
        return action.sectionName;
      default:
        return state;
    }
  }
};
