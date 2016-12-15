import React from 'react';
import { WingBlank, WhiteSpace, Table } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';
// dataSource1={[{
//   time: moment(props.event.time).format('YYYY-MM-DD'),
//   location: props.event.location,
//   fee: props.event.unit === 'dollar' ? '$' : '¥' + props.event.fee,
//   limit: props.event.limit
// }]}
export default (props) => {
  return (
    <WingBlank className="event">
      {
        props.event ?
          <div style={{margin: '1.5rem 0', color: '#515355'}}>
            <div className="event-head">
              <h1 style={{fontSize: '.5rem'}}>{props.event.title}</h1>
              {/*<div>
                <span>Admin</span>&nbsp;
                <span style={{fontStyle: 'italic', fontSize: '0.2rem', color: '#b2b2b2', marginLeft: '10px'}}>{moment(props.event.createdAt).format('YYYY-MM-DD')}</span>
              </div> */}
              <Table
                style={{margin: '0.3rem 0'}}
                direction="horizon"
                columns={[
                  { title: '标题', dataIndex: 'title', key: 'title' },
                  { title: '内容', dataIndex: 'content', key: 'content' }
                ]}
                dataSource={[
                  {
                    title: '时间',
                    content: moment(props.event.time).format('YYYY-MM-DD'),
                    key: '1'
                  },
                  {
                    title: '地点',
                    content: props.event.location,
                    key: '2'
                  },
                  {
                    title: '费用',
                    content: props.event.unit === 'dollar' ? '$' : '¥' + props.event.fee,
                    key: '3'
                  },
                  {
                    title: '限制人数',
                    content: props.event.limit,
                    key: '4'
                  }
                ]}
              />
            </div>
            <WhiteSpace />
            <div className="event-content" dangerouslySetInnerHTML={{ __html: props.event.desc }} style={{fontSize: '.3rem', lineHeight: '1.6'}}/>
          </div>
          :
          <Loading />
      }
    </WingBlank>
  );
};
