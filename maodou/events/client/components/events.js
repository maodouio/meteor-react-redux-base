import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import Loading from 'client/components/common/loading';

export default (props) => {
  const T = props.context.T;
  return (
    <div className="container" style={{ paddingTop: '60px'}}>
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
                      <Link to={`/events/${event._id}`}>
                        <h4>{event.title}</h4>
                        {/*<p>{event.plainDesc}</p>*/}
                      </Link>
                    </div>
                    <div className="panel-footer">
                    <span className="pull-right">
                      Fee: {event.unit === 'dollar' ? '$' : '¥'} {event.fee}
                    </span>
                      {moment(event.time).format('MM-DD-YYYY')} | {event.location}
                    </div>
                  </div>
                </div>
              ) :
              <div>no events</div> :
            <Loading />
        }
      </div>
    </div>
  );
}
