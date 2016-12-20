import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
// import Tabs from '../containers/tabs';
import { Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props) => {
  const T = props.context.T;

  const renderFooter = () => {
    return (
      <span>
        <Icon type="eye" /> 1000
        <Icon type="heart" style={{marginLeft: '.2rem'}}/> 60
      </span>
    );
  };

  return (
    <WingBlank size='md' style={{ padding: '1rem 0' }}>
     <Helmet title='文章列表页' />
      {
        props.posts.status === 'ready' ?
          props.posts.data.length > 0 ?
            props.posts.data.map((post, index) =>
              <Link key={post._id} to={`/post/${post._id}`}>
                <Card>
                  <Card.Header
                    thumb={post.coverUrl}
                    thumbStyle={{width: '100%'}}
                  />
                  <Card.Body>
                    <p style={{fontSize: '.3rem', color: '#333'}}>
                      <b>{post.title}</b>
                    </p>
                  </Card.Body>
                  <Card.Footer content={<span><Icon type="tag" /> {post.category}</span>} extra={renderFooter()} />
                </Card>
                <WhiteSpace />
              </Link>
            ) :
            <div>抱歉，目前还没有文章！</div> :
          <Loading />
      }
    </WingBlank>
  );
};
