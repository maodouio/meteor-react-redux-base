import React, { Component, PropTypes } from 'react';
import { TabBar } from 'antd-mobile/dist/antd-mobile';
import { browserHistory } from 'react-router';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  // renderContent() {
  //   this.setState({
  //     hidden: !this.state.hidden,
  //   });
  // }
  render() {
    const {dispatch, selectedTab, selectedTabName} = this.props;
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={selectedTabName === 'hideNav'}
      >
        <TabBar.Item
          title="文章"
          key="文章"
          icon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/news.png'}}
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/newsOn.png'}}
          selected={selectedTabName === 'posts'}
          onPress={() => {
            browserHistory.push('/posts/list');
            dispatch(selectedTab('posts'));
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/courses.png'}}
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/coursesOn.png'}}
          title="活动"
          key="活动"
          selected={selectedTabName === 'events'}
          onPress={() => {
            browserHistory.push('/events/list');
            dispatch(selectedTab('events'));
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/me.png'}}
          selectedIcon={{uri: 'https://ohn5es96r.qnssl.com/base/icon/meOn.png'}}
          title="我的"
          key="我的"
          selected={selectedTabName === 'users'}
          onPress={() => {
            browserHistory.push('/user');
            dispatch(selectedTab('users'));
          }}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func,
  selectedTab: PropTypes.func,
  selectedTabName: PropTypes.string,
};
