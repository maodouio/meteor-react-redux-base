import React from 'react';
import { TabBar } from 'antd-mobile/dist/antd-mobile';

export default class PostTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollection: false,
      likeCount: 500,
    };
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          key="share"
          title='分享'
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/share.png'}}
          selected={true}
        >
        </TabBar.Item>
        <TabBar.Item
          key="collection"
          title={ this.state.isCollection ? '已收藏' : '收藏'}
          onPress={ () => this.setState({ isCollection: !this.state.isCollection})}
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/heart.png'}}
          selected={true}
        >
        </TabBar.Item>
        <TabBar.Item
          key="comment"
          title='50'
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/comment.png'}}
          selected={true}
        >
        </TabBar.Item>
        <TabBar.Item
          key="like"
          title={ this.state.likeCount }
          onPress={ () => this.setState({ likeCount: this.state.likeCount+1})}
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/likes.png'}}
          selected={true}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}
