import {connect} from 'react-redux';
import {useDeps} from 'react-simple-di';
import {composeAll} from 'react-komposer';

import Counter from '../components/counter';

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch, {actions}) => ({
  onIncrement() {
    dispatch(actions.counter.increment());
  },

  onReset() {
    dispatch(actions.counter.reset());
  },

  onRandom() {
    dispatch(actions.counter.random());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
