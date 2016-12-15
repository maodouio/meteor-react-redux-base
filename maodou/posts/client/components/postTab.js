import React from 'react';
import { TabBar } from 'antd-mobile/dist/antd-mobile';

export default class PostTab extends React.Component {
  constructor(props) {
    super(props);
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
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/share.png'}}
          selected={true}
        >
        </TabBar.Item>
        <TabBar.Item
          key="comment"
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/comment.png'}}
          selected={true}
        >
        </TabBar.Item>
        <TabBar.Item
          key="collection"
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/heart.png'}}
          selected={true}
        >
        </TabBar.Item>
        <TabBar.Item
          key="like"
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/like.png'}}
          selected={true}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}
