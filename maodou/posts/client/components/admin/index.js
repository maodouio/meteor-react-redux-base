import React from 'react';

export default (props) => {
  return (
    <div style={{margin: '20px 10px'}}>
      <a className="btn btn-info" href="/admin/posts/list">All posts</a>&nbsp;
      <a className="btn btn-info" href="/admin/posts/add">Add post</a>&nbsp;
      <a className="btn btn-info" href="/admin/posts/categories">Categories</a>

      {props.children}
    </div>
  );
}
