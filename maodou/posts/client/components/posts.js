import React from 'react';
import Loading from 'client/components/common/loading';

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        {
          props.posts.length > 0 ?
            props.posts.map((post, index) =>
              <div key={index} className="col-sm-12">
                <div className="hpanel blog-box">
                  <div className="panel-heading">
                    <div className="media clearfix">
                      <a className="pull-left">
                        <img src="/images/a8.jpg" alt="profile-picture" />
                      </a>
                      <div className="media-body">
                        <small>Created by: <span className="font-bold">Mike Smith</span></small>
                        <br />
                          <small className="text-muted">21.03.2015, 06:45 pm</small>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <a href={`/posts/${post._id}`}>
                      <h4>[{post.category}] {post.title}</h4>
                      <p>{post.content}</p>
                    </a>
                  </div>
                  <div className="panel-footer">
                  <span className="pull-right">
                      <i className="fa fa-comments-o" /> 22 comments
                  </span>
                    <i className="fa fa-eye" /> 142 views
                  </div>
                </div>
              </div>
            ) :
            <Loading />
        }
      </div>
    </div>
  );
}
