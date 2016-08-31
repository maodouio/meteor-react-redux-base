import React from 'react';

export default (props) => {
  return (
    <div>
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
