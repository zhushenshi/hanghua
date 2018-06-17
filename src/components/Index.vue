<template>
  <div>
    <header-view></header-view>
    <div class="banner" @mouseenter="stop()" @mouseleave="play()">
    <!-- 图片列表-->
    
      <ul>
        <transition  name="fade">
        <li v-for="(img,index) in imgUrls" :key='index' v-if="index==mark"><a href="#" class="link"><img :src="img.src"></a></li>
        </transition>
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev" @click="change(-1)"></span>
      <span class="cut next" @click="change(1)"></span>
      <!-- 小圆点指示器-->
      <div class="indicator">
        <a href="" v-for="(img,index) in imgUrls" :key='index' :class="{cur:index==mark}" @mouseenter='indicator(index)'></a>
      </div>
    </div>
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><a href="#" class="more">more</a>****产品</h2>
        <ul class="clearfloat">
          <li><a href="#" class="link"><img src="../assets/images/01.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="../assets/images/02.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="../assets/images/03.jpg" alt=""/></a></li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title"><a href="#" class="more">more</a>关于航华</h2>
          <p>安徽航华电子科技有限公司自诞生起一直致力于为客户提供提供热水系统解决方案。  
          	<a href="#">查看更多</a></p>
        </div>
        <div class="ind_news">
          <h2 class="title"><a href="#" class="more">more</a>公司动态</h2>
          <ul>
            <li><span>2016-02-21</span><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a></li>
            <li><span>2016-02-21</span><a href="">********************</a></li>
            <li><span>2016-02-21</span><a href="">************************</a></li>
            <li><span>2016-02-21</span><a href="">********************</a></li>
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

export default {
  name:'Index',
  data () {
    return {
      msg: '这是主页面',
      imgUrls:[
        {src:require('../assets/images/banner_01.jpg')},
        {src:require('../assets/images/banner_02.jpg')},
        {src:require('../assets/images/banner_03.jpg')},
        {src:require('../assets/images/banner_04.jpg')}
        ],
        mark:0,
        timer: null
    }
  },
  created (){this.play();},
  methods: {
   autoPlay () {  
      this.mark++;  
      if (this.mark === 4) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  
    },
    play(){
       this.timer=setInterval(this.autoPlay, 2500)  
      console.log(this.timer)
       
    },
    stop(){
      let That=this
      clearTimeout(That.timer);
      console.log('mouseenter')
      console.log(this.timer)
    },
    change(parms){
     if (this.mark === 3&&parms===1) {
        this.mark = 0  
        return
      }else if(this.mark===0&&parms===-1){
        this.mark = 3;
        return
      }
      this.mark+=parms;  
    },
    indicator(index){
      this.mark=index;
    }
  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
	.banner {
    height: 500px;
    position: relative;
    border-bottom: 3px solid #ddd;
}
.banner ul li {
    height: 100%;
    width: 100%;
    position: absolute;
    display: block;
    z-index: 10;
    overflow:hidden;
    transition: all 1s linear;
}
.banner ul li img{
  width:100%;
}

.banner .cut {
    position: absolute;
    width: 43px;
    height: 75px;
    opacity: 0.3;
    top:50%;
    margin-top: -38px;
    left:50%;
    background: #000 url(../assets/images/iconlist.png) no-repeat;
    display: none;
    z-index: 20;
}
.banner:hover .cut {
    display: block;
}
.banner .cut:hover {
    opacity: 0.5;
    cursor: pointer;
}
.banner .prev {
    margin-left:-485px;
    background-position: 10px -325px;
}
.banner .next {
    margin-left:442px;
    background-position: 10px -395px;
}
.banner .indicator {
    position: absolute;
    width: 100%;
    left:0;
    bottom:24px;
    text-align: center;
    z-index: 20;
}
.banner .indicator a {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ccc;
    margin: 5px;
}
.banner .indicator a.cur {
    background: #f90;
}
</style>
