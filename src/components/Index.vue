<template>
  <div>
    <header-view></header-view>
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(img,index) in imgUrls" :key='index'><img :src="img.src" alt="" style="width:100%;"></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
              
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
          </div>
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><a href="#" class="more">more</a>航华服务</h2>
        <ul class="clearfloat">
          <li><a href="#" class="link"><img src="../assets/images/s1.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="../assets/images/s3.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="../assets/images/s2.jpg" alt=""/></a></li>
          
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title"><a href="#" class="more">more</a>关于航华</h2>
          <p>安徽航华电子科技有限公司自诞生起一直致力于为客户提供提供热水系统解决方案。  
          	<a href="#/about">查看更多</a></p>
        </div>
        <div class="ind_news">
          <h2 class="title"><a href="#" class="more">more</a>公司动态</h2>
          <ul>
            <li><span>2016-02-21</span><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a></li>
          </ul>
        </div>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'

import 'swiper/dist/css/swiper.min.css';

export default {
  name:'Index',
  data () {
    return {
      msg: '这是主页面',
      imgUrls:[
        // {src:require('../assets/images/banner_01.jpg')},
        // {src:require('../assets/images/banner_02.jpg')},
        // {src:require('../assets/images/banner_03.jpg')},
        // {src:require('../assets/images/banner_04.jpg')},
        {src:require('../assets/images/banner1.png')},
        {src:require('../assets/images/banner2.jpg')},
        {src:require('../assets/images/banner3.jpg')},
        ]
    }
  },
  mounted (){
  var mySwiper = new Swiper ('.swiper-container', {
    
    // 如果需要前进后退按钮
      navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
        // bulletClass : 'my-bullet',pagination分页器内元素的类名。
        // bulletActiveClass: 'my-bullet-active',pagination分页器内活动(active)元素的类名。
        keyboard: {
          enabled: true,
        },
      },
      loop:true,
      // slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
      // effect:'fade',
      effect:'cube',
      // effect:'coverflow',
      // effect:'flip',
    
  })      
  },
  methods: {
  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
    width: 100%;
}  
.title {
    font-size: 16px;
    font-weight: lighter;
    padding-left:45px;
    background: url("../assets/images/logo.png") no-repeat;
    background-size:contain; 
    line-height: 36px;
    border-bottom: 1px solid #ddd;
}
.title .more {
    float: right;
    font-size: 12px;
    color:#999;
}
.title .more:hover {
    color:#f63;
}
</style>
