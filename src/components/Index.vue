<template>
  <div>
    <header-view></header-view>
    <div class="banner">
    <!-- 图片列表-->
      <ul>
        <li style="background: url(images/banner_01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a href="#" class="link"></a></li>
        <li style="background: url(images/banner_02.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li>
        <li v-for="(img,index) in imgUrls" :key='index'><a href="#" class="link"><img :src="img" alt=""/></a></li>
        <!-- <li style="background: url(images/banner_03.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li> -->
        <!-- <li style="background: url(images/banner_04.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li> -->
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev"></span>
      <span class="cut next"></span>
      <!-- 小圆点指示器-->
      <div class="indicator">
        <a href="" class="cur"></a><a href=""></a><a href=""></a><a href=""></a>
      </div>
    </div>

    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><a href="#" class="more">more</a>****产品</h2>
        <ul class="clearfloat">
          <li><a href="#" class="link"><img src="images/01.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="images/02.jpg" alt=""/></a></li>
          <li><a href="#" class="link"><img src="images/03.jpg" alt=""/></a></li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title"><a href="#" class="more">more</a>关于***</h2>
          <p>*******科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。 
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
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'

export default {
  name:'Index',
  data () {
    return {
      msg: '这是主页面',
      imgUrls:['images/banner_01.jpg','images/banner_02.jpg','images/banner_03.jpg','images/banner_04.jpg']
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
	.banner {
    height: 500px;
    position: relative;
    border-bottom: 3px solid #ddd;
}
.banner ul li {
    height: 100%;
    width: 100%;
    position: absolute;
    display: none;
    z-index: 10;
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
