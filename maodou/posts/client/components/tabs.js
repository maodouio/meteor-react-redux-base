import React from 'react';
import { TabBar } from 'antd-mobile/dist/antd-mobile';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
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
          title="新闻"
          key="新闻"
          icon={require('../icons/news.png')}
          selectedIcon={require('../icons/newsOn.png')}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent}
        </TabBar.Item>
        <TabBar.Item
          icon={require('../icons/活动.png')}
          selectedIcon={require('../icons/活动 (1).png')}
          title="活动"
          key="活动"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent}
        </TabBar.Item>
        <TabBar.Item
          icon={require('../icons/项目.png')}
          selectedIcon={require('../icons/项目 (1).png')}
          title="项目"
          key="项目"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent}
        </TabBar.Item>
        <TabBar.Item
          icon={require('../icons/客户.png')}
          selectedIcon={require('../icons/客户 (1).png')}
          title="客户"
          key="客户"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
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
// export default class extends React.Component {
//
//   render() {
//     return (
//       <div className={`posts-tab ${this.props.position} ${this.props.color}`}>
//         <ul className="flex-container">
//           {
//             this.props.configs ?
//               this.props.configs.categories.map((cate, i) =>
//                 <li
//                   key={i}
//                   onClick={(e) => this.props.dispatch(this.props.changeCategory(e, cate))}
//                   className={`${cate===this.props.category ? 'active' : ''} flex-item`}
//                 >
//                   {cate}
//                 </li>
//               ) :
//               <div />
//           }
//         </ul>
//       </div>
//     );
//   }
// }
