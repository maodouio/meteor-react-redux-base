import React from 'react';
import Helmet from 'react-helmet';

export default (props) => {
  return (
    <div className="admin-package-wrapper row">
      <Helmet
        title='添加新文章'
      />
      <div className="col-sm-12">
        <h1 style={{marginBottom: '20px'}}>添加新文章</h1>
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
            <a className="btn btn-success" id="pickfiles" href="#">上传封面(选填)</a>
          </div>
          <div className="post-coverImg">
            { props.state.beginUpload ? <p>正在上传，请稍候...</p> : <span /> }
            { props.state.fileUploaded ? <p>图片上传完成．</p> : <span /> }
            { props.coverUrl ?
              <img src={`${props.coverUrl}?imageView2/2/w/600/h/300/interlace/0/q/100`} alt="post cover" /> : <span />
            }
          </div>
          <input className="form-control" type="text" placeholder="添加文章标题" name="title" />
          <br />
          <input className="form-control" type="text" placeholder="文章作者或者文章来源" name="author" />
          <br />
          <div id="editor" />
          <button className="btn btn-success" type="submit">发布</button>
        </form>
      </div>
    </div>
  );
}
