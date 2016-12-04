import React,{ Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile/dist/antd-mobile';
import { defaultImgUrl } from 'lib/helpers/defaultValue';
import { Link } from 'react-router';

export default class LiveBroadCast extends Component {
  render() {
    return (
      <Link to='http://www.live.maodou.io'>
      <Card>
        <Card.Header
          thumb={defaultImgUrl}
          thumbStyle={{width: '100%', height: '2.5rem'}}
        />
        <Card.Body>
          <p style={{fontSize: '1.3em'}}>
            <span style={{color: '#2196f3', fontSize: '.2rem'}}><i className='fa fa-video-camera'>正在直播</i></span><b style={{marginLeft: '30px'}}>内容创业者</b>
          </p>
        </Card.Body>
      </Card>
      <WhiteSpace />
      </Link>
    );
  }
}
