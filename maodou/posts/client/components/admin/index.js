import React from 'react';

export default (props) => {
  return (
    <div>
      posts admin index
      <a href="/admin/posts/list">All posts</a> |
      <a href="/admin/posts/add">Add post</a> |
      <a href="/admin/posts/categories">Categories</a> |

      {props.children}
    </div>
  );
}
