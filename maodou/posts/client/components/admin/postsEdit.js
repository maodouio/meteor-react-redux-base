import React from 'react';

export default (props) => {
  return (
    <div className="admin-package-wrapper row">
      <div className="col-sm-12">
        <h1>编辑文章</h1>
        <form onSubmit={(e) => props.dispatch(props.updatePost(e, props.data.post._id, props.coverUrl))}>
          <div className="form-group">
            <label htmlFor="select-category">选择分类</label>
            <select id="select-category" className="form-control" name="category">
              {
                props.data.categories.length > 0 ?
                  props.data.categories.map((category, index) =>
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
            { props.state.beginUpload ? <p>正在上传，请稍候...</p> : <span /> }
            { props.state.fileUploaded ? <p>图片上传完成．</p> : <span /> }
            { props.coverUrl ?
              <img src={`${props.coverUrl}?imageView2/2/w/600/h/300/interlace/0/q/100`} alt="post cover" />
              : <img className="responsive-img" src={`${props.data.post.coverUrl}?imageView2/2/w/600/h/300/interlace/0/q/100`} alt="post cover" />
            }
          </div>
          <div className='form-group'>
            <label for="title">文章标题</label>
            <input className="form-control" type="text" name="title" id="title" defaultValue={props.data.post.title}/>
          </div>
          <div className='form-group'>
            <label for="author">文章作者</label>
            <input className="form-control" type="text" name="author" id="author" defaultValue={props.data.post.author}/>
          </div>
          <br />
          <div id="editor">
            <div dangerouslySetInnerHTML={{ __html: props.data.post.content }}></div>
          </div>
          <button className="btn btn-success" type="submit">发布</button>
        </form>
      </div>
    </div>
  );
}
