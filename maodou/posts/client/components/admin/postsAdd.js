import React from 'react';

export default (props) => {
  return (
    <div>
      <p>posts add</p>
      <form onSubmit={props.addPost}>
        <input type="text" placeholder="title" name="title" /><br/>
        <textarea placeholder="content" name="content" /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
