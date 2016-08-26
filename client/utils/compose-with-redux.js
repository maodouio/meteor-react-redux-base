import {compose} from 'react-komposer-plus';

function composeReduxBase(fn, props, onData) {
  if (!props.context) {
    throw new Error('No context passed as prop.');
  }

  const context = typeof props.context === 'function' ? props.context() : props.context;
  const Store = context.Store || context.store;

  if (!Store) {
    throw new Error('No store found in the context');
  }

  const processState = () => {
    try {
      const state = Store.getState();
      const data = fn(state, props);
      onData(null, data);
    } catch (ex) {
      onData(ex);
    }
  };

  processState();
  return Store.subscribe(processState);
}

export default function composeWithRedux(fn, L1, E1, options = { displayName: 'WithRedux' }) {
  return compose(composeReduxBase.bind(null, fn), L1, E1, options);
}
