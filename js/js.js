$(function () {

  /* index banner */
  var c = 0

  function timer() {
    c++;
    c = (c == 4) ? 0 : c;
    //获得序号
    $('.i_warp_banner .tu img').eq(c).stop().show().siblings().hide();
    $('.i_warp_banner .dos .dor a').eq(c).stop().addClass('dors').siblings().removeClass('dors');
  }

  time = setInterval(timer, 2000);

  $('.i_warp_banner').hover(function () {
    //清除定时器//显示图片
    clearInterval(time);
  }, function () {
    //回调函数//恢复定时器//隐藏图片
    time = setInterval(timer, 2000);
  })
  //点击圆点变换
  $('.i_warp_banner .dos .dor a').click(function () {
    var n = $(this).index();
    $('.i_warp_banner .tu img').eq(n).stop().show().siblings().hide();
    $('.i_warp_banner .dos .dor a').eq(n).stop().addClass('dors').siblings().removeClass('dors');
  })


  /* index tab */
  $('.i_warp_tab ul li').click(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.i_warp_item .i_warp_main').eq(i).show().siblings().hide();
  });

})


