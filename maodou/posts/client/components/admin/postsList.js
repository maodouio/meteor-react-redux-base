import React from 'react';

export default (props) => {
  return (
    <div>
      {
        props.posts.map((post, index) =>
          <p key={index}>
            [{post.category || 'uncategorized'}] {post.title}
            <a onClick={(e) => props.deletePost(post._id, e)} href="#">Delete</a>
          </p>
        )
      }
    </div>
  );
}
