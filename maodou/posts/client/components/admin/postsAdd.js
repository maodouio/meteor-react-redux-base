import React from 'react';

export default (props) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Add Post</h1>
        <form onSubmit={props.addPost}>
          <div className="form-group">
            <label htmlFor="select-category">选择分类</label>
            <select id="select-category" className="form-control" name="category">
              {
                props.categories.length > 0 ?
                  props.categories.map((category, index) =>
                    <option key={index} value={category}>{category}</option>
                  ) :
                  <option>Loading...</option>
              }
            </select>
          </div>
          <div id="upload-container">
            <a className="btn btn-default btn-lg " id="pickfiles">
              <i className="glyphicon glyphicon-plus" />
              <span>选择文件</span>
            </a>
          </div>
          <img src={props.coverUrl || ''} alt="post cover" />
          <br/>
          <input className="form-control" type="text" placeholder="title" name="title" />
          <br />
          <div id="editor" />
          <button className="btn btn-default" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
