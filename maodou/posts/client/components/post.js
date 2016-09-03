import React from 'react';

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="hpanel blog-article-box">
            <div className="panel-heading">
              <h4>[{props.post.category}] {props.post.title}</h4>
              <div className="text-muted small">
                Created by: <span className="font-bold">Mike Smith</span>
                21.03.2015, 06:45 pm
              </div>
            </div>
            <div className="panel-body">
              {props.post.content}
            </div>
            <div className="panel-footer">
                <span className="pull-right">
                    <i className="fa fa-comments-o" /> 22 comments
                </span>
              <i className="fa fa-eye" /> 142 views
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
