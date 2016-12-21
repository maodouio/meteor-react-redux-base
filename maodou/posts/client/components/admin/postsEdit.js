import React from 'react';

export default (props) => {
  const { dispatch, coverUrl, updatePost } = props;
  const { categories, post } = props;
  const { beginUpload, fileUploaded } = props.state;
  const url = coverUrl ? coverUrl : post.coverUrl;
  return (
    <div className="admin-package-wrapper row">
      <div className="col-sm-12">
        <h1 style={{marginBottom: '20px'}}>编辑文章</h1>
        <form onSubmit={(e) => dispatch(updatePost(e, post._id, url))}>
          <div className="form-group">
            <label htmlFor="select-category">选择分类</label>
            <select id="select-category" className="form-control" name="category">
              {
                categories.length > 0 ?
                  categories.map((category, index) =>
                    <option key={index} value={category}>{category}</option>
                  ) :
                  <option>Loading...</option>
              }
            </select>
          </div>
          <div id="upload-container">
            <a className="btn btn-success" id="pickfiles" href="#">更换封面</a>
          </div>
          <div className="post-coverImg">
            { beginUpload ? <p>正在上传，请稍候...</p> : <span /> }
            { fileUploaded ? <p>图片上传完成．</p> : <span /> }
            { coverUrl ?
              <img src={`${coverUrl}?imageView2/2/w/600/h/300/interlace/0/q/100`} alt="post cover" />
              : <img className="responsive-img" src={`${post.coverUrl}?imageView2/2/w/600/h/300/interlace/0/q/100`} alt="post cover" />
            }
          </div>
          <div className='form-group'>
            <label htmlFor="title">文章标题</label>
            <input className="form-control" type="text" name="title" id="title" defaultValue={post.title}/>
          </div>
          <div className='form-group'>
            <label htmlFor="author">文章作者</label>
            <input className="form-control" type="text" name="author" id="author" defaultValue={post.author}/>
          </div>
          <br />
          <div id="editor">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          <button className="btn btn-success" type="submit">发布</button>
        </form>
      </div>
    </div>
  );
}
