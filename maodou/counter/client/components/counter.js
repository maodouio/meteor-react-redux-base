import React from 'react';

export default (props) =>
  <div>
    <p>
      <label>{props.counter}</label>
    </p>
    <div>
      <button onClick={props.onIncrement}>INC</button>
      <button onClick={props.onReset}>RST</button>
      <button onClick={props.onRandom}>RND</button>
    </div>
  </div>;
