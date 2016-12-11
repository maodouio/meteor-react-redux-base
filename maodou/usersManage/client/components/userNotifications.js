import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { SegmentedControl, WhiteSpace, WingBlank, Flex, List } from 'antd-mobile/dist/antd-mobile';

export default class UserNotifications extends Component {
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

  renderNotice() {
    const Item = List.Item;
    const Brief = Item.Brief;
    return(
      <List style={{marginTop: '.2rem'}}>
        <Item arrow="horizontal" multipleLine>系统消息<Brief>想探索更多的内容，赶快加入小组吧！</Brief></Item>
        <Item arrow="horizontal" multipleLine>系统消息<Brief>恭喜，您已成为会员！</Brief></Item>
        <Item arrow="horizontal" multipleLine>系统消息<Brief>恭喜，您已注册成功，赶快浏览内容或者完善资料吧！</Brief></Item>
      </List>
    );
  }

  render() {
    return(
      <WingBlank size="sm" style={{fontSize: '.3rem', paddingTop: '1rem'}}>
        <Helmet title='消息通知' />
        <WhiteSpace size="md" />
        <SegmentedControl
          values={['我的消息', '小组消息']}
          onChange={this.handleChange}
        />
        <Flex justify='center' direction='column'>
          { this.state.index ? this.renderNotice() : <p style={{marginTop: '.8rem'}}>暂无消息!</p> }
        </Flex>
        <WhiteSpace size="sm" />
      </WingBlank>
    );
  }
}
