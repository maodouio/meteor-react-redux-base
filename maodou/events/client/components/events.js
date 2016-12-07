import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
// import Tabs from '../containers/tabs';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import LiveBroadCast from './LiveBroadCast';

export default (props) => {
  const T = props.context.T;
  return (
    <div style={{ padding: '1rem .3rem' }}>
      <Helmet title='活动列表页' />
      {/*<LiveBroadCast /> */}
      {
        props.events.status === 'ready' ?
          props.events.data.length > 0 ?
            props.events.data.map((event, index) =>
              <Link key={event._id} to={`/event/${event._id}`}>
                <Card>
                  <Card.Header
                    thumb={event.coverUrl}
                    thumbStyle={{width: '100%'}}
                  />
                  <Card.Body>
                    <p style={{fontSize: '1.3em'}}>
                      <b>{event.title}</b>
                    </p>
                    <p style={{
                      fontSize: '.5em',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>{event.plainDesc}</p>
                  </Card.Body>
                  <Card.Footer extra={
                    <div>
                      <span style={{marginRight: '20px'}}><i className="fa fa-map-marker" aria-hidden="true"></i>{event.location}</span>
                      <span style={{marginRight: '10px'}}><i className="fa fa-calendar" aria-hidden="true"></i>{moment(event.createdAt).format('YYYY.MM.DD')}</span>
                    </div>
                    } />
                </Card>
                <WhiteSpace />
              </Link>
            ) :
            <div>抱歉，目前还没有文章！</div> :
          <Loading />
      }
    </div>
  );
};
