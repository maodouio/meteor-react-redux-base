export default function () {
  //如果导航被点击则值为  true
  let nav_checked = false;
  //导航列表
  let $nav = $('.navbar-nav li a');
  let $public = $('.nav_aPublic li a')
  //导航 点击跳转到  当前导航对应位置内容 效果
  $public.click(function(event){
    event.preventDefault();
  });
  $nav.on('click',function(){
    //导航被点击
    nav_checked = true;
    $('.nav_in').removeClass('nav_in');
    $(this).addClass('nav_in');
    let scroll_top_demo = $('.nav_in').attr('href');
    let scroll_top_num = $(scroll_top_demo).offset().top;
    $('html,body').animate({scrollTop:scroll_top_num},'slow');
    //导航被点击  结束 改变状态
    setTimeout(function(){nav_checked = false;},1000);
  });
  $( window ).scroll(function() {
    if($(this).scrollTop() > $('.navbar').height() + 50) {
      $('.navbar').addClass('navbar-inverse');
      $('.navbar').addClass('scrolling');
    } else {
      $('.navbar').removeClass('navbar-inverse');
      $('.navbar').removeClass('scrolling');
    }
    //滚动到导航链接处，将对应导航置为选择状态
    let s_top = $('body').scrollTop();
    //点击导航则不执行这里
    if(!nav_checked){
      $nav.each(function() {
        let data_href = $(this).attr('href');
        let $nav_demo = $(data_href);
        let middle = $(window).height()/2;
        if($nav_demo.offset().top - s_top < middle){
          $nav.each(function() {$(this).removeClass('nav_in');});
          $(this).addClass('nav_in');
        }
        if($nav_demo.offset().top - s_top > middle){
          $(this).removeClass('nav_in');
        }
      });
    }
  });
}
