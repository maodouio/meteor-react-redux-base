import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { WingBlank, Grid } from 'antd-mobile/dist/antd-mobile';

const data = [
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '科技'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '文学'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '财经'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '电影'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '音乐'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '娱乐'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '同城'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '其他'},
  {icon: 'https://ohn5es96r.qnssl.com/base/icon/group.png', text: '更多'},
];

export default class UserGroups extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <WingBlank size='md' style={{paddingTop: '1rem', fontSize: '.3rem'}}>
        <Helmet title='我的小组' />
        <p style={{ margin: '.2rem', color: '#999' }}>加入喜欢的小组</p>
        <Grid data={data} columnNum={3} hasLine={false}/>
      </WingBlank>
    );
  }
}
