import React from 'react';
import {Link} from 'react-router';

import Loading from 'client/components/common/loading';

export default (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <h1>All Posts</h1>
        </div>
      </div>
      <div className="row">
        {
          props.posts.status === 'ready' ?
            props.posts.data.length > 0 ?
              props.posts.data.map((post, index) =>
                <div key={index} className="col-sm-12">
                  <div className="hpanel blog-box">
                    <div className="panel-heading">
                      <div className="media clearfix">
                        <div className="media-body">
                          <small className="text-muted">21.03.2015, 06:45 pm</small>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      <Link to={`/post/${post._id}`}>
                        <h4>[{post.category}] {post.title}</h4>
                        <p>{post.plainContent}</p>
                      </Link>
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
              <div>no post</div> :
            <Loading />
        }
      </div>
    </div>
  );
}
