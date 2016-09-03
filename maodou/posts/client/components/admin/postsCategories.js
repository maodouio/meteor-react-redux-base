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
        <div className="input-group">
          <input className="form-control" type="text" name="category" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">添加分类</button>
          </span>
        </div>
      </form>
    </div>
  );
}
