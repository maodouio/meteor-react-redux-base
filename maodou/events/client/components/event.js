import React from 'react';
import Loading from 'client/components/common/loading';

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {
            props.event ?
              <div className="hpanel blog-article-box">
                <div className="panel-heading">
                  <h4>{props.event.title}</h4>
                  <div className="text-muted small">
                    Created by: <span className="font-bold">Mike Smith</span>
                    21.03.2015, 06:45 pm
                  </div>
                </div>
                <div className="panel-body" dangerouslySetInnerHTML={{ __html: props.event.content }} />
                <div className="panel-footer">
                <span className="pull-right">
                    <i className="fa fa-comments-o" /> 22 comments
                </span>
                  <i className="fa fa-eye" /> 142 views
                </div>
              </div> :
              <Loading />
          }
        </div>
      </div>
    </div>
  );
}
