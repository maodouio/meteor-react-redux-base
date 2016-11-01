import React from 'react';
import LaddaButton from 'react-ladda';

export default (props) => {
  return (
    <div className="admin-package-wrapper row">
      <div className="col-sm-12">
        <h1>添加新文章</h1>
        <form onSubmit={(e) => props.dispatch(props.addPost(e, props.coverUrl))}>
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
            <LaddaButton className="btn btn-success" loading={false} id="pickfiles" buttonStyle="zoom-in">上传封面</LaddaButton>
          </div>
          {
            props.coverUrl ?
              <img src={props.coverUrl} alt="post cover" /> :
              <span />
          }
          <br/>
          <input className="form-control" type="text" placeholder="标题" name="title" />
          <br />
          <div id="editor" />
          <button className="btn btn-default" type="submit">发布</button>
        </form>
      </div>
    </div>
  );
}
