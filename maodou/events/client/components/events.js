import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import Loading from 'client/components/common/loading';

export default (props) => {
  const T = props.context.T;
  return (
    <div className="container">
      <div className="row">
        {
          props.events.status === 'ready' ?
            props.events.data.length > 0 ?
              props.events.data.map((event, index) =>
                <div key={index} className="col-sm-12">
                  <div className="hpanel blog-box">
                    {/*<div className="panel-heading">*/}
                      {/*<div className="media clearfix">*/}
                        {/*<Link to="#" className="pull-left">*/}
                          {/*<img src="/images/a8.jpg" alt="profile-picture" />*/}
                        {/*</Link>*/}
                        {/*<div className="media-body">*/}
                          {/*<small>Created by: <span className="font-bold">Mike Smith</span></small>*/}
                          {/*<br />*/}
                            {/*<small className="text-muted">21.03.2015, 06:45 pm</small>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                    <div className="panel-body">
                      <div className="event-img">
                        <img src={event.coverUrl} alt="event picture"/>
                      </div>
                      <Link to={`/event/${event._id}`}>
                        <h4>{event.title}</h4>
                        <p className="event-desc">{event.plainDesc}</p>
                      </Link>
                    </div>
                    <div className="panel-footer">
                    <span className="pull-right">
                      费用: {event.unit === 'dollar' ? '$' : '¥'} {event.fee}
                    </span>
                      <i className='fa fa-clock-o'></i>{ moment(event.time).format('YYYY-MM-DD')} | <i className='fa fa-location-arrow'></i>{event.location}
                    </div>
                  </div>
                </div>
              ) :
              <div>抱歉，目前还没有活动！</div> :
            <Loading />
        }
      </div>
    </div>
  );
}
