import React from 'react';

export default (props) => {
  return (
    <div>
      <p>posts add</p>
      <form onSubmit={props.addPost}>
        Category
        <select name="category">
          {
            props.categories.map((category, index) =>
              <option key={index} value={category}>{category}</option>
            )
          }
        </select>
        <br/>
        <input type="text" placeholder="title" name="title" />
        <br/>
        <textarea placeholder="content" name="content" /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
