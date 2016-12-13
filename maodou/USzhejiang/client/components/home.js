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
                    <div className="carousel-caption">
                      ...
                    </div>
                  </div>
                  <div className="item">
                    <img width='100%' height='100%' src="/images/tense/lbt2.jpg" alt="..." />
                    <div className="carousel-caption">
                      ...
                    </div>
                  </div>
                  <div className="item">
                    <img width='100%' height='100%' src="/images/tense/lbt3.jpg" alt="..." />
                    <div className="carousel-caption">
                      ...
                    </div>
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
                        <div className="col-md-12" style={{paddingBottom:'100px'}}>
                            <h2 className="section-heading center white space-bottom">
                                about tense
                            </h2>
                            <p className="center white capitalize">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, iure iste! Accusamus ipsam, iusto nesciunt! Repudiandae ducimus officiis quo rerum odio fugiat cumque, quibusdam dolore maiores quae deleniti, autem praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia alias voluptatibus ut placeat atque maxime asperiores laborum nobis, qui optio nemo obcaecati, non eos. Labore necessitatibus velit accusantium repellendus, esse.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectional-medium shuoming-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-pills" id="reverse-tab">
                                <li className="active"><a href="#usability" data-toggle="tab"><i className="fa fa-random" aria-hidden="true" style={{ fontSize: '5em', color: '#222' }}></i> USABILITY</a></li>
                                <li><a href="#ideas" data-toggle="tab"><i className="fa fa-random" aria-hidden="true" style={{ fontSize: '5em', color: '#222' }}></i> NEW IDEAS</a></li>
                                <li><a href="#direction" data-toggle="tab"><i className="fa fa-random" aria-hidden="true" style={{ fontSize: '5em', color: '#222' }}></i> DIRECTION</a></li>
                                <li><a href="#uxd" data-toggle="tab"><i className="fa fa-random" aria-hidden="true" style={{ fontSize: '5em', color: '#222' }}></i> UX DESIGN</a></li>
                            </ul>
                            <div className="tab-content tab-content-horizontal-left-top">
                                <div className="tab-pane fade in active" id="usability">
                                    <div className="col-md-5">
                                        <img src="images/tense-iphone-6.png" alt="tense-in-iphone" className="img-responsive wow bounceIn" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="sectional-medium">
                                            <h3 className="section-heading space-top space-bottom">GREAT USABILITY TESTING</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ideas">
                                    <div className="col-md-7">
                                        <div className="sectional-medium">
                                            <h3 className="section-heading space-top space-bottom">NEW IDEAS IMPLEMENTED</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img src="images/tense-left-half-macbook-air.png" alt="tense-in-macbook" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="direction">
                                    <div className="col-md-12">
                                        <img src="images/tense-left-full-macbook-air.png" alt="tense-in-macbook" className="img-responsive" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="uxd">
                                    <p className="  fadeIn">Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus</p>
                                </div>
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
                                <i className="fa fa-random" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">BETTER UX</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay=".1s">
                                <i className="fa fa-video-camera" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">SMART IDEAS</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay=".17s">
                                <i className="fa fa-globe" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">RESPONSIVENESS</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center space-bottom wow fadeInUp" data-wow-delay=".24s">
                                <i className="fa fa-user-circle-o" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">PREMIUM SUPPORT</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".05s">
                                <i className="fa fa-handshake-o" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">UNLIMITED COLOR</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".13s">
                                <i className="fa fa-mortar-board" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">BETTER VIEW</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".21s">
                                <i className="fa fa-exchange" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
                                <h4 className="features-title">BETTER VIEW</h4>
                                <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="icon-box center wow fadeInUp" data-wow-delay=".29s">
                                <i className="fa fa-dollar" aria-hidden="true" style={{ fontSize: '4em', color: '#222' }}></i>
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