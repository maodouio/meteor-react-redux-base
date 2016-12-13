export default {
  templateName: 'Tense',
  logoName: 'Tense',
  headTitle: 'Tense Template',
  preview: 'https://ohjdeohom.qnssl.com/simple.png?imageView2/2/w/200/h/300/interlace/0/q/100',
  selected: false,
  sections: [
    {
      name: '首页',
      anchorName: 'home',
      index: 1,
      display: true,
      content: `
      <section class='padding0' id='carousel'>
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img width='100%' height='100%' src="/images/tense/lbt1.jpg" alt="..." />
              <div class="carousel-caption">
                ...
              </div>
            </div>
            <div class="item">
              <img width='100%' height='100%' src="/images/tense/lbt2.jpg" alt="..." />
              <div class="carousel-caption">
                ...
              </div>
            </div>
            <div class="item">
              <img width='100%' height='100%' src="/images/tense/lbt3.jpg" alt="..." />
              <div class="carousel-caption">
                ...
              </div>
            </div>
          </div>

          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      `
    },
    {
      name: '欢迎',
      anchorName: 'welcome',
      index: 2,
      display: true,
      content: `
      <section class="sectional-large-top bg-off-white shuoming-welcome">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 center">
                      <img src="images/light-bulb.svg" alt="idea" width="100px" class="wow bounceIn" />
                      <h1 class="big-heading wow fadeInUp space-bottom animated">WELCOME TO TENSE</h1>
                      <h4 class="big-sub-heading">JOIN OVER 100k+ SATISFIED CUSTOMRES</h4>
                      <p class="uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a, beatae voluptatem. Repellat aspernatur, placeat autem sequi omnis, provident. Est magni cum, voluptatem repellat atque nobis culpa voluptates iste omnis.</p>
                      <img src="images/tense/welcome.jpg" class="img-space-top img-responsive wow fadeInUp" alt="" />
                  </div>
              </div>
          </div>
      </section>
    `
    },
    {
      name: '关于我们',
      anchorName: 'about',
      index: 3,
      display: true,
      content: `
      <section class="section-bg-alt sectional-large shuoming-about" id="about-us">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 paddingB100">
                      <h2 class="section-heading center white space-bottom">
                          about tense
                      </h2>
                      <p class="center white capitalize">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, iure iste! Accusamus ipsam, iusto nesciunt! Repudiandae ducimus officiis quo rerum odio fugiat cumque, quibusdam dolore maiores quae deleniti, autem praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia alias voluptatibus ut placeat atque maxime asperiores laborum nobis, qui optio nemo obcaecati, non eos. Labore necessitatibus velit accusantium repellendus, esse.
                      </p>
                  </div>
              </div>
          </div>
      </section>
      <section class="sectional-medium shuoming-about">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <ul class="nav nav-pills" id="reverse-tab">
                          <li class="active"><a href="#usability" data-toggle="tab"><i class="fa fa-industry" aria-hidden="true"></i> USABILITY</a></li>
                          <li><a href="#ideas" data-toggle="tab"><i class="fa fa-line-chart" aria-hidden="true"></i> NEW IDEAS</a></li>
                          <li><a href="#direction" data-toggle="tab"><i class="fa fa-list-alt" aria-hidden="true"></i> DIRECTION</a></li>
                          <li><a href="#uxd" data-toggle="tab"><i class="fa fa-rocket" aria-hidden="true"></i> UX DESIGN</a></li>
                      </ul>
                      <div class="tab-content tab-content-horizontal-left-top">
                          <div class="tab-pane fade in active" id="usability">
                              <div class="col-md-5">
                                  <img src="images/tense-iphone-6.png" alt="tense-in-iphone" class="img-responsive wow bounceIn" />
                              </div>
                              <div class="col-md-7">
                                  <div class="sectional-medium">
                                      <h3 class="section-heading space-top space-bottom">GREAT USABILITY TESTING</h3>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade" id="ideas">
                              <div class="col-md-7">
                                  <div class="sectional-medium">
                                      <h3 class="section-heading space-top space-bottom">NEW IDEAS IMPLEMENTED</h3>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo aliquam a laborum magnam molestiae cupiditate voluptas, doloribus. Quae hic qui dicta quisquam delectus! Nam ut eum maxime, dignissimos itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam non accusamus distinctio dolorum quas obcaecati vel perferendis nihil sint, id molestias inventore facere nulla molestiae? Placeat soluta nam voluptatem!
                                      </p>
                                  </div>
                              </div>
                              <div class="col-md-5">
                                  <img src="images/tense-left-half-macbook-air.png" alt="tense-in-macbook" />
                              </div>
                          </div>
                          <div class="tab-pane fade" id="direction">
                              <div class="col-md-12">
                                  <img src="images/tense-left-full-macbook-air.png" alt="tense-in-macbook" class="img-responsive" />
                              </div>
                          </div>
                          <div class="tab-pane fade" id="uxd">
                              <p class="  fadeIn">Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `
    },
    {
      name: '服务介绍',
      anchorName: 'services',
      index: 4,
      display: true,
      content: `
      <section class="section-bg-main sectional-large shuoming-service" id="services">
          <div class="container">
              <h2 class="section-heading center space-bottom wow fadeInUp">
                  our services
              </h2>
              <div class="row">
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center space-bottom wow fadeInUp" data-wow-delay="0.03s">
                          <i class="fa fa-random" aria-hidden="true"></i>
                          <h4 class="features-title">BETTER UX</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center space-bottom wow fadeInUp" data-wow-delay=".1s">
                          <i class="fa fa-video-camera" aria-hidden="true"></i>
                          <h4 class="features-title">SMART IDEAS</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center space-bottom wow fadeInUp" data-wow-delay=".17s">
                          <i class="fa fa-globe" aria-hidden="true"></i>
                          <h4 class="features-title">RESPONSIVENESS</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center space-bottom wow fadeInUp" data-wow-delay=".24s">
                          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                          <h4 class="features-title">PREMIUM SUPPORT</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center wow fadeInUp" data-wow-delay=".05s">
                          <i class="fa fa-handshake-o" aria-hidden="true"></i>
                          <h4 class="features-title">UNLIMITED COLOR</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center wow fadeInUp" data-wow-delay=".13s">
                          <i class="fa fa-mortar-board" aria-hidden="true"></i>
                          <h4 class="features-title">BETTER VIEW</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center wow fadeInUp" data-wow-delay=".21s">
                          <i class="fa fa-exchange" aria-hidden="true"></i>
                          <h4 class="features-title">BETTER VIEW</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="icon-box center wow fadeInUp" data-wow-delay=".29s">
                          <i class="fa fa-dollar" aria-hidden="true"></i>
                          <h4 class="features-title">BETTER VIEW</h4>
                          <p>Sed justo eros, cursus nec ultrices to istique eget nisi. Fusce conguet ripoi bulum lacinia.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `
    },
    {
      name: '工作项目',
      anchorName: 'work',
      index: 5,
      display: true,
      content: `
      <section class="sectional-large shuoming-ourwork" id="works">
          <div class="container">
              <h2 class="section-heading space-bottom-large center">OUR WORKS</h2>
              <div class="row small-gutter">
                  <div class="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0s">
                      <div class="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                          <figure class="hover-mask-4">
                              <img src="images/tense/600X400(1.png" alt="image" />
                              <a class="figure-zoom" data-rel="lightcase" href="images/tense/600X400(1.png"><i class="fa fa-search"></i></a>
                              <a class="figure-link" href="#"><i class="fa fa-link"></i></a>
                              <figcaption class="center">
                              <header>
                                  <h5><a href="">nepal faces earthquake</a></h5>
                              </header>
                              <article>
                                  <ul class="list-seperated-dots text-uppercase">
                                      <li><a href="">muaz</a></li>
                                      <li><a href="">22 sept 2015</a></li>
                                  </ul>
                              </article>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.1s">
                      <div class="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1">
                          <figure class="hover-mask-4">
                              <img src="images/tense/600X400(2.png" alt="image" />
                              <a class="figure-zoom" data-rel="lightcase" href="images/tense/600X400(2.png"><i class="fa fa-search"></i></a>
                              <a class="figure-link" href="#"><i class="fa fa-link"></i></a>
                              <figcaption class="center">
                              <header>
                                  <h5><a href="">nepal faces earthquake</a></h5>
                              </header>
                              <article>
                                  <ul class="list-seperated-dots text-uppercase">
                                      <li><a href="">muaz</a></li>
                                      <li><a href="">22 sept 2015</a></li>
                                  </ul>
                              </article>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.2s">
                      <div class="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                          <figure class="hover-mask-4">
                              <img src="images/tense/600X400(3.png" alt="image" />
                              <a class="figure-zoom" data-rel="lightcase" href="images/tense/600X400(3.png"><i class="fa fa-search"></i></a>
                              <a class="figure-link" href="#"><i class="fa fa-link"></i></a>
                              <figcaption class="center">
                              <header>
                                  <h5><a href="">nepal faces earthquake</a></h5>
                              </header>
                              <article>
                                  <ul class="list-seperated-dots text-uppercase">
                                      <li><a href="">muaz</a></li>
                                      <li><a href="">22 sept 2015</a></li>
                                  </ul>
                              </article>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.3s">
                      <div class="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                          <figure class="hover-mask-4">
                              <img src="images/tense/600X400(4.png" alt="image" />
                              <a class="figure-zoom" data-rel="lightcase" href="images/tense/600X400(4.png"><i class="fa fa-search"></i></a>
                              <a class="figure-link" href="#"><i class="fa fa-link"></i></a>
                              <figcaption class="center">
                              <header>
                                  <h5><a href="">nepal faces earthquake</a></h5>
                              </header>
                              <article>
                                  <ul class="list-seperated-dots text-uppercase">
                                      <li><a href="">muaz</a></li>
                                      <li><a href="">22 sept 2015</a></li>
                                  </ul>
                              </article>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.4s">
                      <div class="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                            <figure class="hover-mask-4">
                                <img src="images/tense/600X400(5.png" alt="image" />
                                <a class="figure-zoom" data-rel="lightcase" href="images/tense/600X400(5.png"><i class="fa fa-search"></i></a>
                                <a class="figure-link" href="#"><i class="fa fa-link"></i></a>
                                <figcaption class="center">
                                    <header>
                                        <h5><a href="">nepal faces earthquake</a></h5>
                                    </header>
                                    <article>
                                      <ul class="list-seperated-dots text-uppercase">
                                                <li><a href="">muaz</a></li>
                                                <li><a href="">22 sept 2015</a></li>
                                            </ul>
                                    </article>
                                </figcaption>
                            </figure>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.5s">
                      <div class="thumbnail same-img-ratio hover-effect-7 image-hover-effect-1 ">
                          <figure class="hover-mask-4">
                              <img src="images/tense/600X400(6.png" alt="image" />
                              <a class="figure-zoom" data-rel="lightcase" href="images/tense/600X400(6.png"><i class="fa fa-search"></i></a>
                              <a class="figure-link" href="#"><i class="fa fa-link"></i></a>
                              <figcaption class="center">
                                  <header>
                                      <h5><a href="">nepal faces earthquake</a></h5>
                                  </header>
                                  <article>
                                  <ul class="list-seperated-dots text-uppercase">
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
      <section class="sectional-small section-bg-alt">
          <div class="container">
              <div class="row">
                  <div class="col-md-7">
                      <h4 class="text-uppercase white  title-head-section">get more updates about our works</h4>
                  </div>
                  <div class="col-md-5">
                      <a href="bizplans/list" class="fright sm-left btn btn-black border-thin btn-lg wow bounceIn">show more works</a>
                  </div>
              </div>
          </div>
      </section>
      `
    },
    {
      name: '新闻活动',
      anchorName: 'news',
      index: 6,
      display: true,
      content: `
      <section class="sectional-medium" id="news">
          <div class="container">
              <h2 class="section-heading center space-bottom wow fadeInUp">
                  our news
              </h2>
              <div class="row">
                  <div class="col-md-12">
                      <div class="row">
                          <div>
                            <div class="col-sm-6 col-md-4 filter-item wow fadeInDown" data-wow-delay="0.1s">
                                <div class="thumbnail same-img-ratio ">
                                    <figure class="hover-mask-4">
                                        <a href="blog-single.php" class="image-link"><i class='fa fa-link'></i></a>
                                        <img src="images/tense/600X400-1.png" alt="img" />
                                    </figure>
                                    <div class="thumb-body">
                                        <div>
                                            <h5 class="text-uppercase">
                                                <a href="#">incididunt ut labore et</a>
                                            </h5>
                                            <div class="small block text-uppercase">
                                                <ul class="list-seperated-dots">
                                                    <li><a href="" class="link-effect-1">Admin</a></li>
                                                    <li><a href="" class="link-effect-1">27 sept</a></li>
                                                    <li><a href="" class="link-effect-1">7 comments</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <article class="thumb-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                            </p>
                                        </article>
                                        <footer>
                                            <a href="" class="link-effect-1">Read more</a>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                              <div class="col-sm-6 col-md-4 filter-item wow fadeInDown" data-wow-delay="0.1s">
                                  <div class="thumbnail same-img-ratio ">
                                      <figure class="hover-mask-4">
                                          <a href="blog-single.php" class="image-link"><i class='fa fa-link'></i></a>
                                          <img src="images/tense/600X400-2.png" alt="img" />
                                      </figure>
                                      <div class="thumb-body">
                                          <div>
                                              <h5 class="text-uppercase">
                                                  <a href="#">incididunt ut labore et</a>
                                              </h5>
                                              <div class="small block text-uppercase">
                                                  <ul class="list-seperated-dots">
                                                      <li><a href="" class="link-effect-1">Admin</a></li>
                                                      <li><a href="" class="link-effect-1">27 sept</a></li>
                                                      <li><a href="" class="link-effect-1">7 comments</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <article class="thumb-content">
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                              </p>
                                          </article>
                                          <footer>
                                              <a href="" class="link-effect-1">Read more</a>
                                          </footer>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-6 col-md-4  filter-item wow fadeInDown" data-wow-delay="0.2s">
                                  <div class="thumbnail same-img-ratio">
                                      <figure class="hover-mask-4">
                                          <a href="blog-single.php" class="image-link"><i class='fa fa-link'></i></a>
                                          <img src="images/tense/600X400-3.png" alt="img" />
                                      </figure>
                                      <div class="thumb-body">
                                          <div>
                                              <h5 class="text-uppercase">
                                                  <a href="#">exercitation ullamco laboris</a>
                                              </h5>
                                              <div class="small block text-uppercase">
                                                  <ul class="list-seperated-dots">
                                                      <li><a href="" class="link-effect-1">Admin</a></li>
                                                      <li><a href="" class="link-effect-1">2 hours</a></li>
                                                      <li><a href="" class="link-effect-1">122 comments</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <article class="thumb-content">
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                              </p>
                                          </article>
                                          <footer>
                                              <a href="" class="link-effect-1">Read more</a>
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
      <section class="sectional-small section-bg-alt">
          <div class="container">
              <div class="row">
                  <div class="col-md-7">
                      <h4 class="text-uppercase white  title-head-section">get more updates about our news</h4>
                  </div>
                  <div class="col-md-5">
                      <a href="/events/list" class="fright sm-left btn btn-black border-thin btn-lg wow bounceIn">show more news</a>
                  </div>
              </div>
          </div>
      </section>
      `
    },
    {
      name: '团队',
      anchorName: 'team',
      index: 7,
      display: true,
      content: `
      <section class="sectional-large" id="team">
          <div class="container">
              <div class="row no-gutter">
                  <h2 class="section-heading center space-bottom wow fadeInUp">
                      <small>who works for us?</small>
                      our team
                  </h2>
                  <div class="col-md-3 col-sm-6">
                      <div class="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0s">
                          <figure class="hover-mask-6">
                              <img src="images/tense/member1.png" alt="image" />
                              <figcaption class="center">
                                  <header>
                                      <h4><a href="">john smith</a></h4>
                                  </header>
                                  <article>
                                      CEO
                                  </article>
                                  <footer>
                                      <ul class="socials circle bg-hover-base-icons">
                                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                      </ul>
                                  </footer>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0.1s">
                          <figure class="hover-mask-6">
                              <img src="images/tense/member2.png" alt="image" />
                              <figcaption class="center">
                                <header>
                                    <h4><a href="">odvut lok</a></h4>
                                </header>
                                <article>
                                    Marketing
                                </article>
                                <footer>
                                    <ul class="socials circle bg-hover-base-icons">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </footer>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0.2s">
                          <figure class="hover-mask-6">
                              <img src="images/tense/member3.png" alt="image" />
                              <figcaption class="center">
                                  <header>
                                      <h4><a href="">fazle rabby</a></h4>
                                  </header>
                                  <article>
                                      Manager
                                  </article>
                                  <footer>
                                      <ul class="socials circle bg-hover-base-icons">
                                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                      </ul>
                                  </footer>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                      <div class="thumbnail same-img-ratio hover-effect-8 wow fadeInUp" data-wow-delay="0.3s">
                          <figure class="hover-mask-6">
                              <img src="images/tense/member4.png" alt="image" />
                              <figcaption class="center">
                                  <header>
                                      <h4><a href="">bebod haque</a></h4>
                                  </header>
                                  <article>
                                      Developer
                                  </article>
                                  <footer>
                                      <ul class="socials circle bg-hover-base-icons">
                                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                      </ul>
                                  </footer>
                              </figcaption>
                          </figure>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `
    },
    {
      name: '价格',
      anchorName: 'pricing',
      index: 8,
      display: true,
      content: `
      <section class="sectional-large" id="pricing">
          <div class="container">
              <div class="row no-gutter">
                  <h3 class="title-heading center seperator-bottom seperator-bottom-1">
                      <span class="section-heading">PRICING PLAN</span>
                  </h3>
                  <p class="lead center">
                      Mollitia quo numquam quod quae accusantium, dolore modi nam iste ducimus officia a, unde dolor? Culpa veniam fugit commodi, quibusdam, omnis hic.
                  </p>
                  <div class="row">
                      <div class="col-md-3">
                          <div class="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.1s">
                              <header  class="bg-base white headerbg">
                                  <h3 class="text-uppercase">
                                      <span class="pricing-title">basic</span>
                                      <small class="block">
                                      Best for nuring
                                      </small>
                                  </h3>
                              </header>
                              <article>
                                  <h3 class="price-main">$29
                                      <small>
                                      month
                                      </small>
                                  </h3>
                                  <ul class="pricing-details">
                                      <li>10 GB Free Sapce</li>
                                      <li>Free FTP Client</li>
                                      <li>Free Support</li>
                                      <li>3 Sub-Domains</li>
                                      <li>3 MySql Account</li>
                                  </ul>
                              </article>
                          </div>
                      </div>
                      <div class="col-md-3">
                          <div class="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.2s">
                              <header class="bg-base white headerbg">
                                  <h3 class="text-uppercase">
                                      <span class="pricing-title">starter</span>
                                      <small class="block">
                                      Best for person
                                      </small>
                                  </h3>
                              </header>
                              <article>
                                  <h3 class="price-main">$129
                                      <small>
                                      month
                                      </small>
                                  </h3>
                                  <ul class="pricing-details">
                                      <li>100 GB Free Sapce</li>
                                      <li>Free FTP Client</li>
                                      <li>Premium Support</li>
                                      <li>10 Sub-Domains</li>
                                      <li>20 MySql Account</li>
                                  </ul>
                              </article>
                          </div>
                      </div>
                      <div class="col-md-3">
                          <div class="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.3s">
                              <header class="bg-base white headerbg">
                                  <h3 class="text-uppercase">
                                      <span class="pricing-title">premium</span>
                                      <small class="block">
                                      Best for office
                                      </small>
                                  </h3>
                              </header>
                              <article>
                                  <h3 class="price-main">$229
                                      <small>
                                      month
                                      </small>
                                  </h3>
                                  <ul class="pricing-details">
                                      <li>1 TB Free Sapce</li>
                                      <li>Free Domain transfer</li>
                                      <li>24/7 Support</li>
                                      <li>30 Sub-Domains</li>
                                      <li>30 MySql Account</li>
                                  </ul>
                              </article>
                          </div>
                      </div>
                      <div class="col-md-3">
                          <div class="pricing pricing-table1 center wow fadeIn" data-wow-delay="0.4s">
                              <header class="bg-base white headerbg">
                                  <h3 class="text-uppercase">
                                      <span class="pricing-title">business</span>
                                      <small class="block">
                                      Best for market
                                      </small>
                                  </h3>
                              </header>
                              <article>
                                  <h3 class="price-main">$329
                                      <small>
                                      month
                                      </small>
                                  </h3>
                                  <ul class="pricing-details">
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
      `
    },
    {
      name: '客户评价',
      anchorName: 'theySay',
      index: 9,
      display: true,
      content: `
      <section class="sectional-large section-bg-main" id='say'>
          <h2 class="section-heading center space-bottom wow fadeInUp">
              what they say
          </h2>
          <div class="container">
              <div class="row">

                <div class="thumbnail-dotted-section">
                  <div class="col-md-4">
                      <div class="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal square-rounded circle-rounded">
                        <div class="thumb-body">
                          <figure>
                              <img src="images/tense/say1.png" class="img-circle" alt="image" />
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
                  <div class="col-md-4">
                      <div class="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                          <div class="thumb-body">
                            <figure>
                              <img src="images/tense/say2.png" class="img-circle" alt="image" />
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
                  <div class="col-md-4">
                      <div class="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                          <div class="thumb-body">
                            <figure>
                              <img src="images/tense/say3.png" class="img-circle" alt="image" />
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
                  <div class="col-md-4">
                      <div class="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                          <div class="thumb-body">
                            <figure>
                              <img src="images/tense/say4.png" class="img-circle" alt="image" />
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
                  <div class="col-md-4">
                      <div class="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                          <div class="thumb-body">
                            <figure>
                              <img src="images/tense/say5.png" class="img-circle" alt="image" />
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
                  <div class="col-md-4">
                      <div class="thumbnail thumbnail-transperant single-testimonial testimonial-horizontal thumbnail-open-dotted-section square-rounded circle-rounded">
                          <div class="thumb-body">
                            <figure>
                              <img src="images/tense/say6.png" class="img-circle" alt="image" />
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
      `
    },
    {
      name: '合作伙伴',
      anchorName: 'partners',
      index: 10,
      display: true,
      content: `
      <section class="sectional-medium" id="partners" style={{padding:'50px 0', background-color:'#f5f5f5'}}>
        <div class='container'>
          <h2 class="section-heading space-bottom-large center">OUR PARTNERS</h2>
          <div class='row'>
            <div class='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
              <img src="/images/tense/logo1.png" alt=""/>
              <p></p>
            </div>
            <div class='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
              <img src="/images/tense/logo2.png" alt=""/>
              <p></p>
            </div>
            <div class='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
              <img src="/images/tense/logo3.png" alt=""/>
              <p></p>
            </div>
            <div class='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
              <img src="/images/tense/logo4.png" alt=""/>
              <p></p>
            </div>
            <div class='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
              <img src="/images/tense/logo5.png" alt=""/>
              <p></p>
            </div>
            <div class='col-md-2 col-sm-4 col-xs-6 partnersLogo'>
              <img src="/images/tense/logo6.png" alt=""/>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      `
    },
    {
      name: '联系我们',
      anchorName: 'contact',
      index: 11,
      display: true,
      content: `
      <section class='contactUs' id="contact">
        <div class="contained-image">
          <iframe class="map-right" id='google-map-container' src="https://www.google.com/maps/embed/v1/place?q=3350%20Scott%20Blvd%20%2364%2C%20Santa%20Clara%2C%20CA&key=AIzaSyAn0Mfg_y9-YjBY_M7IE58xqzLXbg10h5k"></iframe>
          <div class="container">
            <div class="row">
              <div class="col-md-5 sectional-medium">
                <h2 class="section-heading space-bottom wow fadeInUp">
                    <small>in case you need to</small>
                    contact us
                </h2>
                <span style={{font-size:'16px'}}><i class="fa fa-phone-square" aria-hidden="true"></i> +1(408)831-8669</span><br/><br/>
                <span style={{font-size:'16px'}}><i class="fa fa-envelope-square" aria-hidden="true"></i> info@zjfutureus.com</span><br/><br/>
                <span style={{font-size:'16px'}}><i class='fa fa-map-marker' aria-hidden="true"></i> 3350 Scott Blvd #64, Santa Clara, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      `
    },
    {
      name: 'footer',
      anchorName: 'footer',
      index: 12,
      display: true,
      content: `
      <footer id='footer'>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="list-inline">
                <li> <a href="#">Home</a> </li>
                <li class="footer-menu-divider">&sdot;</li>
                <li> <a href="#about">About</a> </li>
                <li class="footer-menu-divider">&sdot;</li>
                <li> <a href="#services">Services</a> </li>
                <li class="footer-menu-divider">&sdot;</li>
                <li> <a href="#contact">Contact</a> </li>
              </ul>
              <p class="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>'
      `
    }
  ]
};
