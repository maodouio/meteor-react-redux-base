export const SET_COUNTER = 'SET_COUNTER';
export const INC_COUNTER = 'INC_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const RAND_COUNTER = 'RAND_COUNTER';

export default {
  set({}, value = 1) {
    return {
      type: SET_COUNTER,
      value
    }
  },

  increment() {
    return {
      type: INC_COUNTER
    };
  },

  reset() {
    return {
      type: RESET_COUNTER
    };
  },

  random() {
    return {
      type: RAND_COUNTER
    };
  }
};
