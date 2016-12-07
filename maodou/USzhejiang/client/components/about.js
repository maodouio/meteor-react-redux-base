import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class About extends React.Component{
  render () {
    return (
      <div>
        <img width='100%' height='100%' src="/images/about1.jpg" alt="..." />
        <div className='container about-body'>
          <p className='vacate2chars'>美国浙江创新中心成立于2013年，前身为杭州创新中心，由浙江杭州未来科技出资建立，是浙江省市区三级政府在美国的窗口。</p>
          <p>中心定位为浙江与美国间，集科技创新、跨境投融资、教育培训、国际运营服务于一体的创新平台。美国浙江创新中心以促进科技成果转化，连接中美创新发展的桥梁，培养高新技术企业和企业家为宗旨，提升企业创新能力，对接中美高新科技领域资源，宣传引进高新科技潜力项目，提供联合办公空间、国际投融资、企业运营指导等服务，为浙江以及全国企业，打开通往美国硅谷的直通车，面向国际顶尖科技领域的窗口，降低企业在美创业风险和成本，催化科技创新，加速企业发展与成长。<br /><br /></p>
          <div className='row'>
            <h2 className='font900weight'>环境建设：</h2>
            <div className='col-xs-12 col-sm-8 col-md-8'>
              <div>
                <p className='vacate2chars'>现有建筑总面积5000平方尺，坐落于世界科技创新核心美国硅谷，紧邻圣克拉拉会议中心，三星、戴尔、甲骨文、思科等高新科技公司，环境宜人、交通便利。创新中心建有封闭式办公室，开放式联合办公空间，多功能会议厅、商务中心、多功能活动室、公共厨房、专用停车场等公共服务设施。水、电、通信、光纤等基础设施配套齐全，布局合理，并配备有智能安保系统。中心采用节能环保管理理念，配用自然采光系统、声光感应控制，自动通风设备、被动降噪系统等先进的技术与设备，为入驻企业提供一个舒适的工作环境。中心还为每个会议室还配备了交互式电子黑板系统，方便企业进行会议交流。<br /><br /></p>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4'>
              <div className='pic2and3'>
                <img className='pic2' width='100%' height='100%' src="/images/about2.jpg" alt="..." />
                <img className='pic3' width='100%' height='100%' src="/images/about3.jpg" alt="..." />
              </div>
            </div>
            <h2 className='font900weight'>运营模式：</h2>
            <div className='col-xs-12'>
              <p className='vacate2chars'>中心按“项目甄选入住+咨询导师+培训加速孵化+天使投资”的运营方式，推出会员制服务模式，打造集体化服务平台和共享环境，为创新创业企业和有意于在海外扩展的企业提供包括落地服务、法律会计、市场开拓、风险投资、人才培育、国际交流、专业技术支持等全方位的服务。在大幅降低企业经营成本、提高企业成活率的同时，培育提升企业自主创新能力和综合竞争力。<br /><br /></p>
            </div>
            <h2 className='font900weight'>投融资平台：</h2>
            <div className='col-xs-12'>
              <p className='vacate2chars'>跨境投融资服务平台，对接中美优质资源，主要为投融资相关项目和投资方提供项目融资，项目路演，项目对接等一站式服务。目前已建立起1000万美元的母基金，用于和硅谷知名的孵化器合作。<br /><br /></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
