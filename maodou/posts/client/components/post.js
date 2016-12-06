import React from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props) => {
  return (
    <WingBlank className="post">
      {
        props.post ?
          <div style={{margin: '1.5rem 0', color: '#515355'}}>
            <div className="post-head">
              <h1>{props.post.title}</h1>
              <span style={{color: '#1296db'}}>{props.post.category}</span>
              <div>
                <span>{props.post.author}</span>
                <span style={{fontStyle: 'italic', fontSize: '0.2rem', color: '#b2b2b2', marginLeft: '10px'}}>{moment(props.post.createdAt).format('YYYY-MM-DD')}</span>
              </div>
            </div>
            <WhiteSpace />
            <div className="post-content" dangerouslySetInnerHTML={{ __html: props.post.content }} style={{fontSize: '.4rem', lineHeight: '1.8'}}/>
          </div>
          :
          <Loading />
      }
    </WingBlank>
  );
};
