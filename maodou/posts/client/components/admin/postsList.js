import React from 'react';

export default (props) => {
  return (
    <div>
      {
        props.posts.map((post, index) =>
          <h4 key={index}>
            [{post.category || 'uncategorized'}] {post.title}
            <a onClick={(e) => props.deletePost(post._id, e)} href="#"> Delete</a>
          </h4>
        )
      }
    </div>
  );
}
