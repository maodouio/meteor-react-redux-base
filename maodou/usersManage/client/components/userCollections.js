import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { SegmentedControl, WhiteSpace, WingBlank, Flex, Card } from 'antd-mobile/dist/antd-mobile';

export default class UserCollections extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      index: true
    };
  }

  handleChange(){
    this.setState({ index: !this.state.index});
  }

  renderCollection() {
    return(
      <div style={{marginTop: '.2rem'}}>
        <Card full>
          <Card.Header
            title='一个投资人为什么投身...'
            thumb='https://ohn5es96r.qnssl.com/base/posts/post-img5.jpg'
            thumbStyle={{width: '400px', height: '300px'}}
          />
          <Card.Footer content="精选内容" extra={<div>2016-12-4</div>} />
        </Card>
        <Card full>
          <Card.Header
            title='内容创业的春天并未...'
            thumb='https://ohn5es96r.qnssl.com/base/posts/post-img2.jpg'
            thumbStyle={{width: '400px', height: '300px'}}
          />
          <Card.Footer content="精选内容" extra={<div>2016-12-4</div>} />
        </Card>
      </div>
    );
  }

  render() {
    return(
      <WingBlank size="md" style={{fontSize: '.3rem', paddingTop: '1rem'}}>
        <Helmet title='我的收藏' />
        <WhiteSpace size="md" />
        <SegmentedControl
          values={['文章收藏', '活动收藏']}
          onChange={this.handleChange}
        />
        <Flex justify='center' direction='column'>
          { this.state.index ? this.renderCollection() : <p style={{marginTop: '.8rem'}}>暂无活动收藏!</p> }
        </Flex>
        <WhiteSpace size="md" />
      </WingBlank>
    );
  }
}
