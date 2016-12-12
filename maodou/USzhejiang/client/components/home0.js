import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Projects from '../components/projects';
import News from '../components/news';

export default class Home extends React.Component{
  render () {
    return (
      <div>
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img width='100%' height='100%' src="/images/p1.jpg" alt="..." />
            </div>
          </div>
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className='full-overlay-content'>
          <div className='titleDivService'>
            <h2 className='titleText'>Service</h2>
          </div>
          <div className="row">
            <div className='col-xs-12 col-sm-12 col-md-12'>
              <div id="service-list" className="tool-idms">
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-random" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">联合办公</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-video-camera" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">项目路演</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-globe" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">海外并购</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">会员一体化</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-handshake-o" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">商务对接</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-mortar-board" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">教育培训</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-exchange" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">技术交流</div>
                </div>
                <div className="items-tool-idms">
                  <div>
                    <i className="fa fa-dollar" aria-hidden="true" style={{ fontSize: '8em', color: '#222' }}></i>
                  </div>
                  <div className="content-items">投融资直通车</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='full-overlay-content'>
          <div className='titleDivProjects'>
            <h2 className='titleText'>Projects</h2>
          </div>
          <Projects />


        </div>
        <div className='full-overlay-content'>
          <div className='titleDivNews'>
            <h2 className='titleText'>News</h2>
          </div>
          <News />


        </div>
        <div className='full-overlay-content' style={{background: 'url(/images/membershipbackground.jpg)'}}>
          <div className='titleDivMembership'>
            <h2>Membership</h2>
          </div>
          <div className="container" style={{ width:'90%'}}>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="pricing-table pt-2 boxed text-center">
                  <h4 className="memberLv">普通会员 </h4>
                  <ul>
                    <li>中心活动</li>
                    <li>办公空间</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="pricing-table pt-2 emphasis text-center">
                  <h4 className="memberLv">金牌会员</h4>
                  <ul>
                    <li><b>含普通会员服务</b></li>
                    <li>商务咨询</li>
                    <li>虚拟办公</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="pricing-table pt-2 boxed text-center">
                  <h4 className="memberLv">白金会员</h4>
                  <ul>
                    <li><b>含金牌会员服务</b></li>
                    <li>商务对接</li>
                    <li>活动场地租赁</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="pricing-table pt-2 emphasis text-center">
                  <h4 className="memberLv">虚拟代运营</h4>
                  <ul>
                    <li><b>含白金会员服务</b>&nbsp;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='full-overlay-content'>
          <div className='titleDivOurPartners'>
            <h2 className='titleText'>Our Partners</h2>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
                <img src="/images/海邦人才基金logo.gif" alt="海邦人才基金"/>
                <p>海邦人才基金</p>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
                <img src="/images/海邦人才基金logo.gif" alt="海邦人才基金"/>
                <p>海邦人才基金</p>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
                <img src="/images/海邦人才基金logo.gif" alt="海邦人才基金"/>
                <p>海邦人才基金</p>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
                <img src="/images/海邦人才基金logo.gif" alt="海邦人才基金"/>
                <p>海邦人才基金</p>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
                <img src="/images/海邦人才基金logo.gif" alt="海邦人才基金"/>
                <p>海邦人才基金</p>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
                <img src="/images/海邦人才基金logo.gif" alt="海邦人才基金"/>
                <p>海邦人才基金</p>
              </div>
            </div>
          </div>
        </div>
        <div className='full-overlay-content' style={{backgroundColor: '#ebebeb'}}>
          <div className='titleDivContactUs'>
            <h2 className='titleText'>Contact Us</h2>
          </div>
          <div className='container contactUs'>
            <div className='row'>
              <div className='col-md-6'>
                <p><i className="fa fa-envelope-square" aria-hidden="true"></i>
                  <span>Email</span>：info@zjfutureus.com
                </p>
                <p><i className="fa fa-phone-square" aria-hidden="true"></i>
                  <span>Phone</span>:  +1(408)831-8669
                </p>



              </div>
              <div className='col-md-6'>
                <p><i className='fa fa-map-marker' aria-hidden="true"></i>
                  <span>address</span>: 3350 Scott Blvd #64, Santa Clara, CA
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// <iframe src="http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3170.4507519396566!2d-121.98725088485698!3d37.37917114259411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9e4f5297417%3A0x820c186aeca0239d!2zMzM1MCBTY290dCBCbHZkICM2NCwgU2FudGEgQ2xhcmEsIENBIDk1MDUx576O5Zu9!5e0!3m2!1szh-CN!2scn!4v1481037126074" width="600" height="450" frameBorder="0" style="border:0" allowFullsScreen></iframe>

// <div className="item">
//   <img width='100%' height='100%' src="/images/us2.jpg" alt="..." />
//   <div className="carousel-caption">
//     ...
//   </div>
// </div>
// <div className="item">
//   <img width='100%' height='100%' src="/images/us3.jpg" alt="..." />
//   <div className="carousel-caption">
//     ...
//   </div>
// </div>
