import React from 'react';
import { TabBar } from 'antd-mobile/dist/antd-mobile';
import { browserHistory } from 'react-router';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'posts',
      hidden: false,
    };
  }
  renderContent() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="文章"
          key="文章"
          icon={{uri: 'http://obd9ssud2.bkt.clouddn.com/maodou/icons/news.png'}}
          selectedIcon={{uri: 'http://obd9ssud2.bkt.clouddn.com/maodou/icons/newsOn.png'}}
          selected={this.state.selectedTab === 'posts'}
          onPress={() => {
            browserHistory.push('/posts/list');
            this.setState({
              selectedTab: 'posts',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: 'http://obd9ssud2.bkt.clouddn.com/maodou/icons/courses.png'}}
          selectedIcon={{uri: 'http://obd9ssud2.bkt.clouddn.com/maodou/icons/coursesOn.png'}}
          title="课程"
          key="课程"
          selected={this.state.selectedTab === 'events'}
          onPress={() => {
            browserHistory.push('/events/list');
            this.setState({
              selectedTab: 'events',
            });
          }}
        >
          {this.renderContent}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: 'http://obd9ssud2.bkt.clouddn.com/maodou/icons/me.png'}}
          selectedIcon={{uri: 'http://obd9ssud2.bkt.clouddn.com/maodou/icons/meOn.png'}}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            browserHistory.push('/user');
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {this.renderContent}
        </TabBar.Item>
      </TabBar>

    );
  }
}
