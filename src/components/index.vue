<template>
  <div class="i_warp">
    <div class="i_warp_banner"><img src="@/assets/banner.png" alt=""></div>

    <div class="i_warp_zmd">
      <div class="name">最新消息</div>
      <div class="marquee">
        <div>金卡会员刘**刚刚兑换了一张iPhoneX 800元代金券</div>
      </div>
    </div>

    <div class="i_warp_hot">
      <div class="title">热销商品</div>
      <div class="item">
        <div class="pic">
          <div class="picture">
            <img src="@/assets/icon_plus.png" alt="" class="plus">
            <img src="@/assets/pic_02.png" alt="" class="photo">
          </div>
          <div class="name">iPhoneX 8折券</div>
          <div class="sore hy"><span>200</span>积分</div>
        </div>
        <div class="pic">
          <div class="picture">
            <img src="@/assets/icon_new.png" alt="" class="plus">
            <img src="@/assets/pic_01.png" alt="" class="photo">
          </div>
          <div class="name">汉堡王 20元代金券</div>
          <div class="sore"><span>10</span>积分</div>
        </div>
        <div class="pic">
          <div class="picture">
            <img src="@/assets/icon_new.png" alt="" class="plus">
            <img src="@/assets/pic_03.png" alt="" class="photo">
          </div>
          <div class="name">迷你小旋风风扇</div>
          <div class="sore"><span>80</span>积分</div>
        </div>
      </div>
    </div>

    <div class="i_warp_go"><img src="@/assets/plus.png" alt=""></div>

    <div class="i_warp_tab">
      <ul>
        <li class="active">代金券</li>
        <li>折扣券</li>
        <li>实物换购券</li>
        <li>现金抵价券</li>
      </ul>
      <div class="main">123</div>
    </div>

  </div>
</template>

<script>
  import '@/assets/index.css';

  export default {
    name: 'index',
    data() {
      return {}
    }
  }
</script>
