import React from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props) => {
  return (
    <WingBlank className="event">
      {
        props.event ?
          <div style={{margin: '1.5rem 0', color: '#515355'}}>
            <div className="event-head" style={{fontWeight: 500, fontSize: '.3rem', color: '#777777', textAlign: 'center'}}>
              <h1 style={{fontSize: '.8rem', fontWeight: 700, color: '#515355'}}>{props.event.title}</h1>
              <div className="text-muted small">
                作者：<span className="font-bold">Admin</span>&nbsp;
                日期：{moment(props.event.createdAt).format('YYYY-MM-DD')}
              </div>
              <br />
              <p>时间：{moment(props.event.time).format('YYYY-MM-DD')}</p>
              <p>地点：{props.event.location}</p>
              <p>费用：{props.event.unit === 'dollar' ? '$' : '¥'} {props.event.fee}</p>
              <p>人数限制：{props.event.limit}</p>
            </div>
            <WhiteSpace />
            <div className="event-content" dangerouslySetInnerHTML={{ __html: props.event.desc }} />
          </div>
          :
          <Loading />
      }
    </WingBlank>
  );
};
