import React from 'react';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props) => {
  return (
    <div className="container" style={{ paddingTop: '60px'}}>
      <div className="row">
        <div className="col-lg-12">
          {
            props.event ?
              <div className="hpanel blog-article-box">
                <div className="panel-heading">
                  <h4>{props.event.title}</h4>
                  <div className="text-muted small">
                    Created by: <span className="font-bold">Admin</span>&nbsp;
                    {moment(props.event.createdAt).format('YYYY-MM-DD')}
                  </div>
                  <br />
                  <p>时间：{moment(props.event.time).format('YYYY-MM-DD')}</p>
                  <p>地点：{props.event.location}</p>
                  <p>费用：{props.event.unit === 'dollar' ? '$' : '¥'} {props.event.fee}</p>
                  <p>人数限制：{props.event.limit}</p>
                </div>
                <div className="panel-body" dangerouslySetInnerHTML={{ __html: props.event.desc }} />
                {/*<div className="panel-footer">*/}
                {/*<span className="pull-right">*/}
                    {/*<i className="fa fa-comments-o" /> 22 comments*/}
                {/*</span>*/}
                  {/*<i className="fa fa-eye" /> 142 views*/}
                {/*</div>*/}
              </div> :
              <Loading />
          }
        </div>
      </div>
    </div>
  );
}
