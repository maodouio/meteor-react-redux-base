import React from 'react';

export default (props) => {
  return (
    <div>
      <p>Current categories:</p>
      {
        props.categories.map((category, index) =>
          <p key={index}>{category} <a href="#" onClick={(e) => props.deleteCategory(category, e)}>Delete</a></p>
        )
      }
      <form onSubmit={props.addCategory}>
        <input type="text" name="category" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
