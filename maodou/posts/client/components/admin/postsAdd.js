import React from 'react';

export default (props) => {
  return (
    <div>
      <h4>添加新文章</h4>
      <form onSubmit={props.addPost}>
        <div className="form-group">
          <label htmlFor="select-category">选择分类</label>
          <select id="select-category" className="form-control" name="category">
            {
              props.categories.map((category, index) =>
                <option key={index} value={category}>{category}</option>
              )
            }
          </select>
        </div>
        <br/>
        <input className="form-control" type="text" placeholder="title" name="title" />
        <br/>
        <textarea className="form-control" placeholder="content" name="content" /><br/>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    </div>
  );
}
