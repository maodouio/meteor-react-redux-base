import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Projects from '../components/projects';
import News from '../components/news';

export default class Home extends React.Component{
  render () {
    return (
      <div id='Tense' className="main-content">
            <section id='carousel' style={{padding: '0 0'}}>
              <div className='logoimg'></div>
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img width='100%' height='100%' src="/images/tense/lbt1.jpg" alt="..." />

                  </div>
                  <div className="item">
                    <img width='100%' height='100%' src="/images/tense/lbt2.jpg" alt="..." />
                  </div>
                  <div className="item">
                    <img width='100%' height='100%' src="/images/tense/lbt3.jpg" alt="..." />
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
              <div className="diy">
                <h2>The Future Among Us</h2>
                <p>美国浙江创新中心为浙江以及全国企业，打开通往美国硅谷的直通车，面向国际顶尖科技领域的窗口，降低企业在美创业风险和成本，催化科技创新，加速企业发展与成长。</p>
              </div>
            </section>
            <section className="sectional-large-top bg-off-white shuoming-welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 center">
                            <img src="images/light-bulb.svg" alt="idea" width="100px" className="wow bounceIn" />
                            <h1 className="big-heading wow fadeInUp space-bottom animated">WELCOME TO TENSE</h1>
                            <h4 className="big-sub-heading">JOIN OVER 100k+ SATISFIED CUSTOMRES</h4>
                            <p className="uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a, beatae voluptatem. Repellat aspernatur, placeat autem sequi omnis, provident. Est magni cum, voluptatem repellat atque nobis culpa voluptates iste omnis.</p>
                            <img src="images/tense/welcome.jpg" className="img-space-top img-responsive wow fadeInUp" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-bg-alt sectional-large shuoming-about" id="about-us">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                            <h2 className="section-heading center white space-bottom">
                                about tense
                            </h2>
                            <p className="center white capitalize">
                                美国浙江创新中心成立于2013年，前身为杭州创新中心，由浙江杭州未来科技出资建立，是浙江省市区三级政府在美国的窗口.<br />中心定位为浙江与美国间，集科技创新、跨境投融资、教育培训、国际运营服务于一体的创新平台。美国浙江创新中心以促进科技成果转化，连接中美创新发展的桥梁，培养高新技术企业和企业家为宗旨，提升企业创新能力，对接中美高新科技领域资源，宣传引进高新科技潜力项目，提供联合办公空间、国际投融资、企业运营指导等服务，为浙江以及全国企业，打开通往美国硅谷的直通车，面向国际顶尖科技领域的窗口，降低企业在美创业风险和成本，催化科技创新，加速企业发展与成长。
                            </p>
                            <h4 className='aboutTitle white'>环境建设：</h4>
                            <div className='white'>
                              <p className='vacate2chars'>现有建筑总面积5000平方尺，坐落于世界科技创新核心美国硅谷，紧邻圣克拉拉会议中心，三星、戴尔、甲骨文、思科等高新科技公司，环境宜人、交通便利。创新中心建有封闭式办公室，开放式联合办公空间，多功能会议厅、商务中心、多功能活动室、公共厨房、专用停车场等公共服务设施。水、电、通信、光纤等基础设施配套齐全，布局合理，并配备有智能安保系统。中心采用节能环保管理理念，配用自然采光系统、声光感应控制，自动通风设备、被动降噪系统等先进的技术与设备，为入驻企业提供一个舒适的工作环境。中心还为每个会议室还配备了交互式电子黑板系统，方便企业进行会议交流。<br /><br /></p>
                            </div>
                            <h4 className='aboutTitle white'>运营模式：</h4>
                            <div className='white'>
                              <p className='vacate2chars'>中心按“项目甄选入住+咨询导师+培训加速孵化+天使投资”的运营方式，推出会员制服务模式，打造集体化服务平台和共享环境，为创新创业企业和有意于在海外扩展的企业提供包括落地服务、法律会计、市场开拓、风险投资、人才培育、国际交流、专业技术支持等全方位的服务。在大幅降低企业经营成本、提高企业成活率的同时，培育提升企业自主创新能力和综合竞争力。<br /><br /></p>
                            </div>
                            <h4 className='aboutTitle white'>投融资平台：</h4>
                            <div className='white'>
                              <p className='vacate2chars'>跨境投融资服务平台，对接中美优质资源，主要为投融资相关项目和投资方提供项目融资，项目路演，项目对接等一站式服务。目前已建立起1000万美元的母基金，用于和硅谷知名的孵化器合作。<br /><br /></p>
                            </div>
                      </div>
                    </div>
                </div>
            </section>
            <section className="section-bg-main sectional-large shuoming-service" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay="0.03s">
                                <i className="fa fa-random" aria-hidden="true"></i>
                                <h4 className="features-title">BETTER UX</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay=".1s">
                                <i className="fa fa-video-camera" aria-hidden="true"></i>
                                <h4 className="features-title">SMART IDEAS</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay=".17s">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <h4 className="features-title">RESPONSIVENESS</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay=".24s">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                <h4 className="features-title">PREMIUM SUPPORT</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".05s">
                                <i className="fa fa-handshake-o" aria-hidden="true"></i>
                                <h4 className="features-title">UNLIMITED COLOR</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".13s">
                                <i className="fa fa-mortar-board" aria-hidden="true"></i>
                                <h4 className="features-title">BETTER VIEW</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".21s">
                                <i className="fa fa-exchange" aria-hidden="true"></i>
                                <h4 className="features-title">BETTER VIEW</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".29s">
                                <i className="fa fa-dollar" aria-hidden="true"></i>
                                <h4 className="features-title">BETTER VIEW</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-large shuoming-ourwork" id="works">
                <div className="container">
                    <h2 className="section-heading space-bottom-large center">OUR WORKS</h2>
                    <div className="row small-gutter">
                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0s">
                            <div className="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                                <figure className="hover-mask-4">
                                    <img src="images/tense/600X400(1.png" alt="image" />
                                    <a className="figure-zoom" data-rel="lightcase" href="http://placehold.it/600x400"><i className="fa fa-search"></i></a>
                                    <a className="figure-link" href="#"><i className="fa fa-link"></i></a>
                                    <figcaption className="center">
                                    <header>
                                        <h5><a href="">nepal faces earthquake</a></h5>
                                    </header>
                                    <article>
                                        <ul className="list-seperated-dots text-uppercase">
                                            <li><a href="">muaz</a></li>
                                            <li><a href="">22 sept 2015</a></li>
                                        </ul>
                                    </article>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1">
                                <figure className="hover-mask-4">
                                    <img src="http://placehold.it/600x400" alt="image" />
                                    <a className="figure-zoom" data-rel="lightcase" href="http://placehold.it/600x400"><i className="fa fa-search"></i></a>
                                    <a className="figure-link" href="#"><i className="fa fa-link"></i></a>
                                    <figcaption className="center">
                                    <header>
                                        <h5><a href="">nepal faces earthquake</a></h5>
                                    </header>
                                    <article>
                                        <ul className="list-seperated-dots text-uppercase">
                                            <li><a href="">muaz</a></li>
                                            <li><a href="">22 sept 2015</a></li>
                                        </ul>
                                    </article>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.2s">
                            <div className="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                                <figure className="hover-mask-4">
                                    <img src="http://placehold.it/600x400" alt="image" />
                                    <a className="figure-zoom" data-rel="lightcase" href="http://placehold.it/600x400"><i className="fa fa-search"></i></a>
                                    <a className="figure-link" href="#"><i className="fa fa-link"></i></a>
                                    <figcaption className="center">
                                    <header>
                                        <h5><a href="">nepal faces earthquake</a></h5>
                                    </header>
                                    <article>
                                        <ul className="list-seperated-dots text-uppercase">
                                            <li><a href="">muaz</a></li>
                                            <li><a href="">22 sept 2015</a></li>
                                        </ul>
                                    </article>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                                <figure className="hover-mask-4">
                                    <img src="http://placehold.it/600x400" alt="image" />
                                    <a className="figure-zoom" data-rel="lightcase" href="http://placehold.it/600x400"><i className="fa fa-search"></i></a>
                                    <a className="figure-link" href="#"><i className="fa fa-link"></i></a>
                                    <figcaption className="center">
                                    <header>
                                        <h5><a href="">nepal faces earthquake</a></h5>
                                    </header>
                                    <article>
                                        <ul className="list-seperated-dots text-uppercase">
                                            <li><a href="">muaz</a></li>
                                            <li><a href="">22 sept 2015</a></li>
                                        </ul>
                                    </article>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.4s">
                            <div className="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                                  <figure className="hover-mask-4">
                                      <img src="http://placehold.it/600x400" alt="image" />
                                      <a className="figure-zoom" data-rel="lightcase" href="http://placehold.it/600x400"><i className="fa fa-search"></i></a>
                                      <a className="figure-link" href="#"><i className="fa fa-link"></i></a>
                                      <figcaption className="center">
                                          <header>
                                              <h5><a href="">nepal faces earthquake</a></h5>
                                          </header>
                                          <article>
                                            <ul className="list-seperated-dots text-uppercase">
                                                      <li><a href="">muaz</a></li>
                                                      <li><a href="">22 sept 2015</a></li>
                                                  </ul>
                                          </article>
                                      </figcaption>
                                  </figure>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                                <figure className="hover-mask-4">
                                    <img src="http://placehold.it/600x400" alt="image" />
                                    <a className="figure-zoom" data-rel="lightcase" href="http://placehold.it/600x400"><i className="fa fa-search"></i></a>
                                    <a className="figure-link" href="#"><i className="fa fa-link"></i></a>
                                    <figcaption className="center">
                                        <header>
                                            <h5><a href="">nepal faces earthquake</a></h5>
                                        </header>
                                        <article>
                                        <ul className="list-seperated-dots text-uppercase">
                                            <li><a href="">muaz</a></li>
                                            <li><a href="">22 sept 2015</a></li>
                                        </ul>
                                        </article>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-medium section-bg-alt" style={{padding:'20px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h4 className="text-uppercase white  title-head-section">get more updates about our works</h4>
                        </div>
                        <div className="col-md-5">
                            <a href="" className="fright sm-left btn btn-black border-thin btn-lg wow bounceIn">show more works</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-medium" id="blog">
                <div className="container">
                    <h2 className="section-heading center space-bottom wow fadeInUp">
                        our news
                    </h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div>
                                  <div className="col-sm-6 col-md-4 filter-item wow fadeInDown" data-wow-delay="0.1s">
                                      <div className="thumbnail same-img-ratio ">
                                          <figure className="hover-mask-4">
                                              <a href="blog-single.php" className="image-link"><i className='fa fa-link'></i></a>
                                              <img src="http://placehold.it/600x400" alt="img" />
                                          </figure>
                                          <div className="thumb-body">
                                              <div>
                                                  <h5 className="text-uppercase">
                                                      <a href="#">incididunt ut labore et</a>
                                                  </h5>
                                                  <div className="small block text-uppercase">
                                                      <ul className="list-seperated-dots">
                                                          <li><a href="" className="link-effect-1">Admin</a></li>
                                                          <li><a href="" className="link-effect-1">27 sept</a></li>
                                                          <li><a href="" className="link-effect-1">7 comments</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <article className="thumb-content">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                                  </p>
                                              </article>
                                              <footer>
                                                  <a href="" className="link-effect-1">Read more</a>
                                              </footer>
                                          </div>
                                      </div>
                                  </div>
                                    <div className="col-sm-6 col-md-4 filter-item wow fadeInDown" data-wow-delay="0.1s">
                                        <div className="thumbnail same-img-ratio ">
                                            <figure className="hover-mask-4">
                                                <a href="blog-single.php" className="image-link"><i className='fa fa-link'></i></a>
                                                <img src="http://placehold.it/600x400" alt="img" />
                                            </figure>
                                            <div className="thumb-body">
                                                <div>
                                                    <h5 className="text-uppercase">
                                                        <a href="#">incididunt ut labore et</a>
                                                    </h5>
                                                    <div className="small block text-uppercase">
                                                        <ul className="list-seperated-dots">
                                                            <li><a href="" className="link-effect-1">Admin</a></li>
                                                            <li><a href="" className="link-effect-1">27 sept</a></li>
                                                            <li><a href="" className="link-effect-1">7 comments</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <article className="thumb-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                                    </p>
                                                </article>
                                                <footer>
                                                    <a href="" className="link-effect-1">Read more</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4  filter-item wow fadeInDown" data-wow-delay="0.2s">
                                        <div className="thumbnail same-img-ratio">
                                            <figure className="hover-mask-4">
                                                <a href="blog-single.php" className="image-link"><i className='fa fa-link'></i></a>
                                                <img src="http://placehold.it/600x400" alt="img" />
                                            </figure>
                                            <div className="thumb-body">
                                                <div>
                                                    <h5 className="text-uppercase">
                                                        <a href="#">exercitation ullamco laboris</a>
                                                    </h5>
                                                    <div className="small block text-uppercase">
                                                        <ul className="list-seperated-dots">
                                                            <li><a href="" className="link-effect-1">Admin</a></li>
                                                            <li><a href="" className="link-effect-1">2 hours</a></li>
                                                            <li><a href="" className="link-effect-1">122 comments</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <article className="thumb-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                                    </p>
                                                </article>
                                                <footer>
                                                    <a href="" className="link-effect-1">Read more</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-medium section-bg-alt" style={{padding:'20px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h4 className="text-uppercase white  title-head-section">get more updates about our news</h4>
                        </div>
                        <div className="col-md-5">
                            <a href="" className="fright sm-left btn btn-black border-thin btn-lg wow bounceIn">show more news</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-large" id="pricing">
                <div className="container">
                    <div className="row no-gutter">
                        <h3 className="title-heading center seperator-bottom seperator-bottom-1">
                            <span className="section-heading">PRICING PLAN</span>
                        </h3>
                        <p className="lead center">
                            Mollitia quo numquam quod quae accusantium, dolore modi nam iste ducimus officia a, unde dolor? Culpa veniam fugit commodi, quibusdam, omnis hic.
                        </p>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.1s">
                                    <header  className="bg-base white headerbg">
                                        <h3 className="text-uppercase">
                                            <span className="pricing-title">basic</span>
                                            <small className="block">
                                            Best for nuring
                                            </small>
                                        </h3>
                                    </header>
                                    <article>
                                        <h3 className="price-main">$29
                                            <small>
                                            month
                                            </small>
                                        </h3>
                                        <ul className="pricing-details">
                                            <li>10 GB Free Sapce</li>
                                            <li>Free FTP Client</li>
                                            <li>Free Support</li>
                                            <li>3 Sub-Domains</li>
                                            <li>3 MySql Account</li>
                                        </ul>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.2s">
                                    <header className="bg-base white headerbg">
                                        <h3 className="text-uppercase">
                                            <span className="pricing-title">starter</span>
                                            <small className="block">
                                            Best for person
                                            </small>
                                        </h3>
                                    </header>
                                    <article>
                                        <h3 className="price-main">$129
                                            <small>
                                            month
                                            </small>
                                        </h3>
                                        <ul className="pricing-details">
                                            <li>100 GB Free Sapce</li>
                                            <li>Free FTP Client</li>
                                            <li>Premium Support</li>
                                            <li>10 Sub-Domains</li>
                                            <li>20 MySql Account</li>
                                        </ul>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.3s">
                                    <header className="bg-base white headerbg">
                                        <h3 className="text-uppercase">
                                            <span className="pricing-title">premium</span>
                                            <small className="block">
                                            Best for office
                                            </small>
                                        </h3>
                                    </header>
                                    <article>
                                        <h3 className="price-main">$229
                                            <small>
                                            month
                                            </small>
                                        </h3>
                                        <ul className="pricing-details">
                                            <li>1 TB Free Sapce</li>
                                            <li>Free Domain transfer</li>
                                            <li>24/7 Support</li>
                                            <li>30 Sub-Domains</li>
                                            <li>30 MySql Account</li>
                                        </ul>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.4s">
                                    <header className="bg-base white headerbg">
                                        <h3 className="text-uppercase">
                                            <span className="pricing-title">business</span>
                                            <small className="block">
                                            Best for market
                                            </small>
                                        </h3>
                                    </header>
                                    <article>
                                        <h3 className="price-main">$329
                                            <small>
                                            month
                                            </small>
                                        </h3>
                                        <ul className="pricing-details">
                                            <li>1 TB Free Sapce</li>
                                            <li>Unlimited Bandwidth</li>
                                            <li>Premium Support</li>
                                            <li>40 Sub-Domains</li>
                                            <li>Unlimited MySql Account</li>
                                        </ul>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-medium" id="partners" style={{padding:'50px 0', backgroundColor:'#f5f5f5'}}>
              <div className='container'>
                <h2 className="section-heading space-bottom-large center">OUR PARTNERS</h2>
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
            </section>
            <section className="sectional-large" id="team">
                <div className="container">
                    <div className="row no-gutter">
                        <h2 className="section-heading center space-bottom wow fadeInUp">
                            <small>who works for us?</small>
                            our team
                        </h2>
                        <div className="col-md-3 col-sm-6">
                            <div className="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0s">
                                <figure className="hover-mask-6">
                                    <img src="http://placehold.it/300x300" alt="image" />
                                    <figcaption className="center">
                                        <header>
                                            <h4><a href="">john smith</a></h4>
                                        </header>
                                        <article>
                                            CEO
                                        </article>
                                        <footer>
                                            <ul className="socials circle bg-hover-base-icons">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </footer>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0.1s">
                                <figure className="hover-mask-6">
                                    <img src="http://placehold.it/300x300" alt="image" />
                                    <figcaption className="center">
                                      <header>
                                          <h4><a href="">odvut lok</a></h4>
                                      </header>
                                      <article>
                                          Marketing
                                      </article>
                                      <footer>
                                          <ul className="socials circle bg-hover-base-icons">
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                          </ul>
                                      </footer>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0.2s">
                                <figure className="hover-mask-6">
                                    <img src="http://placehold.it/300x300" alt="image" />
                                    <figcaption className="center">
                                        <header>
                                            <h4><a href="">fazle rabby</a></h4>
                                        </header>
                                        <article>
                                            Manager
                                        </article>
                                        <footer>
                                            <ul className="socials circle bg-hover-base-icons">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </footer>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0.3s">
                                <figure className="hover-mask-6">
                                    <img src="http://placehold.it/300x300" alt="image" />
                                    <figcaption className="center">
                                        <header>
                                            <h4><a href="">bebod haque</a></h4>
                                        </header>
                                        <article>
                                            Developer
                                        </article>
                                        <footer>
                                            <ul className="socials circle bg-hover-base-icons">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </footer>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-large section-bg-main">
                <h2 className="section-heading center space-bottom wow fadeInUp">
                    what they say
                </h2>
                <div className="container">
                    <div className="row">

                      <div className="thumbnail-dotted-section">
                        <div className="col-md-4">
                            <div className="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal square-rounded circle-rounded">
                              <div className="thumb-body">
                                <figure>
                                    <img src="http://placehold.it/300x300" className="img-circle" alt="image" />
                                </figure>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </article>
                                <footer>
                                    <p><b>Muaz</b>, CEO Themesolve</p>
                                </footer>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                                <div className="thumb-body">
                                  <figure>
                                    <img src="http://placehold.it/300x300" className="img-circle" alt="image" />
                                </figure>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </article>
                                <footer>
                                    <p><b>Bappi</b>, Co-Founder Themesolve</p>
                                </footer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                                <div className="thumb-body">
                                  <figure>
                                    <img src="http://placehold.it/300x300" className="img-circle" alt="image" />
                                </figure>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </article>
                                <footer>
                                    <p><b>John Doe</b>, CEO Uttara Motors</p>
                                </footer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                                <div className="thumb-body">
                                  <figure>
                                    <img src="http://placehold.it/300x300" className="img-circle" alt="image" />
                                </figure>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </article>
                                <footer>
                                    <p><b>Jane</b>, Akij Group</p>
                                </footer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                                <div className="thumb-body">
                                  <figure>
                                    <img src="http://placehold.it/300x300" className="img-circle" alt="image" />
                                </figure>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </article>
                                <footer>
                                    <p><b>Tomas</b>, PuranDhaka</p>
                                </footer>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                                <div className="thumb-body">
                                  <figure>
                                    <img src="http://placehold.it/300x300" className="img-circle" alt="image" />
                                </figure>
                                  <article>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                  </article>
                                  <footer>
                                      <p><b>Muaz</b>, CEO Themesolve</p>
                                  </footer>
                                </div>
                            </div>
                        </div>
                      </div>
                      </div>
                </div>
            </section>
            <section className='contactUs' id="contact">
            <div className="contained-image">

              <iframe className="map-right" id='google-map-container' src="https://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3170.4507519396566!2d-121.98725088485696!3d37.37917114259411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9e4f5297417%3A0x820c186aeca0239d!2zMzM1MCBTY290dCBCbHZkICM2NCwgU2FudGEgQ2xhcmEsIENBIDk1MDUx576O5Zu9!5e0!3m2!1szh-CN!2scn!4v1481440812689"></iframe>
              <div className="container">
                <div className="row">
                  <div className="col-md-5 sectional-medium">
                    <h2 className="section-heading space-bottom wow fadeInUp">
                        <small>in case you need to</small>
                        contact us
                    </h2>
                    <span style={{fontSize:'16px'}}><i className="fa fa-phone-square" aria-hidden="true"></i> +1(408)831-8669</span><br/><br/>
                    <span style={{fontSize:'16px'}}><i className="fa fa-envelope-square" aria-hidden="true"></i> info@zjfutureus.com</span><br/><br/>
                    <span style={{fontSize:'16px'}}><i className='fa fa-map-marker' aria-hidden="true"></i> 3350 Scott Blvd #64, Santa Clara, CA</span>
                  </div>

                </div>
              </div></div>
            </section>
          </div>
    );
  }
}
// <header id="header" className="header-fixed header-fixed-top header-transperent nav-white">
//     <nav className="nav">
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-3 nav-menu-padding">
//                     <a href="" className="logo fleft"><img src="images/logo.png" alt="logo" /></a>
//                 </div>
//                 <div className="col-md-9">
//                     <span className="menu-toggler"></span>
//                     <ul className="nav-menu align-right">
//                         <li className="current"><a href="#header">home</a></li>
//                         <li><a href="#about-us">about us</a></li>
//                         <li><a href="#services">services</a></li>
//                         <li><a href="#works">works</a></li>
//                         <li><a href="#team">team</a></li>
//                         <li><a href="#pricing">pricing</a></li>
//                         <li><a href="#blog">Blog</a></li>
//                         <li><a href="#contact">contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </nav>
// </header>
