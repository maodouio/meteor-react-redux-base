import React, { Component, PropTypes } from 'react';
import { Button, Flex, WhiteSpace, List } from 'antd-mobile/dist/antd-mobile';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import ShowNoticeBar from 'client/components/common/showNoticeBar';

export default class MemberInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isMember, loggedIn } = this.props;
    return(
      <Flex justify="center" algin='center' direction="column" style={{fontSize: '.3rem', paddingTop: '1rem'}}>
        <Helmet title='我的会员' />
        { loggedIn ? this.renderMember(isMember) : this.renderLogin()}
      </Flex>
    );
  }

  renderMember(isMember) {
    if (isMember) {
      return(
        <div>
          <ShowNoticeBar type='info' text='您已经是会员了'/>
          { this.renderDescribe()}
        </div>
      );
    }
    return(
      <div>
        <ShowNoticeBar type='info' text='您还不是会员'/>
        <ShowNoticeBar type='info' text='成为会员，享受更多权益'/>
        <Flex justify='center'>
          <Button type='ghost' inline>成为会员</Button>
        </Flex>
        { this.renderDescribe()}
      </div>
    );
  }

  renderDescribe(){
    const Item = List.Item;
    const Brief = Item.Brief;

    return(
      <List style={{marginTop: '.8rem'}}
        renderHeader= { () => '会员权益'}
      >
      <Item wrap multipleLine arrow="horizontal">精选内容<Brief>每周为您推送一篇精心准备的，深度解剖的文章．</Brief></Item>
      <Item wrap multipleLine arrow="horizontal">创建小组<Brief>创建自己的小组，分享知识和生活．</Brief></Item>
      <Item wrap multipleLine arrow="horizontal">线下活动<Brief>第一时间参加线下活动，结交好友，分享智慧．</Brief></Item>
      <Item wrap multipleLine arrow="horizontal">更多权益<Brief>未来更多权益，及时拥有</Brief></Item>
      </List>
    );
  }

  renderLogin() {
    return(
      <div>
        <ShowNoticeBar type='info' text='尚未登录'/>
        <Flex justify='center' algin='center'>
          <Link to='/login'><Button type='warning' inline>去登录</Button></Link>
        </Flex>
      </div>
    );
  }
}

MemberInfo.propTypes = {
  loggedIn: PropTypes.bool,
  isMember: PropTypes.bool,
};
