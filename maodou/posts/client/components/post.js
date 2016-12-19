import React from 'react';
import { WingBlank, WhiteSpace, Icon } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import PostTab from './postTab';

export default (props) => {
  return (
    <div>
      <WingBlank>
      {
        props.post ?
          <div style={{margin: '1rem 0'}}>
            <p style={{fontSize: '.3rem', margin: '.1rem 0'}}>{props.post.title}</p>
            <div style={{color: '#1296db', fontSize: '.15rem'}}>
              <span><Icon type="user" /> {props.post.author}</span>
              <span style={{marginLeft: '.3rem'}}><Icon type="message" /> 50</span>
              <span style={{marginLeft: '.4rem'}}><Icon type="clock-circle-o" /> {moment(props.post.createdAt).format('YYYY-MM-DD')}</span>
            </div>
            <WhiteSpace />
            <div dangerouslySetInnerHTML={{ __html: props.post.content }} style={{color: '#515355', fontSize: '.25rem', lineHeight: '1.8'}}/>
            <WhiteSpace />
          </div>
          :
          <Loading />
      }
      </WingBlank>
      <PostTab />
    </div>
  );
};
