import {check} from 'meteor/check';
import {SET_COUNTER, INC_COUNTER, RESET_COUNTER, RAND_COUNTER} from '../actions/counter';

export default {
  counter: (state = 0, action) => {
    switch (action.type) {
      case SET_COUNTER:
        check(action.value, Number);
        return action.value;

      case INC_COUNTER:
        return state + 1;

      case RESET_COUNTER:
        return 0;

      case RAND_COUNTER:
        return Math.floor(Math.random() * 100);

      default:
        return state;
    }
  }
};
