import React from 'react';
import { WingBlank, WhiteSpace, Icon } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import PostTab from './postTab';

export default (props) => {
  return (
    <WingBlank>
      {
        props.post ?
          <div style={{margin: '1.5rem 0'}}>
            <p style={{fontSize: '.4rem'}}>{props.post.title}</p>
            <WhiteSpace />
            <div style={{color: '#1296db', fontSize: '.3rem'}}>
              <span><Icon type="user" /> {props.post.author}</span>
              <span style={{marginLeft: '.3rem'}}><Icon type="tag-o" /> {props.post.category}</span>
              <span style={{marginLeft: '.4rem'}}><Icon type="message" /> 50</span>
              <span style={{marginRight: '.2rem', float: 'right'}}><Icon type="clock-circle-o" /> {moment(props.post.createdAt).format('YYYY-MM-DD')}</span>
            </div>
            <WhiteSpace />
            <div dangerouslySetInnerHTML={{ __html: props.post.content }} style={{color: '#515355', fontSize: '.3rem', lineHeight: '1.6'}}/>
            <WhiteSpace />
            <PostTab />
          </div>
          :
          <Loading />
      }
    </WingBlank>
  );
};
