import React from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={props.addPost}>add post</button>
      {
        props.posts.map((post, index) =>
          <p key={index}>
            {post.title}
          </p>
        )
      }
    </div>
  );
}
