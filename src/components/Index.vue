<template>
  <div>
    <header-view></header-view>
    <div class="banner">
    <!-- 图片列表-->
      <ul>
        <li style="background: url(images/banner_01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a href="#" class="link"></a></li>
        <!-- <li style="background: url(images/banner_02.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li> -->
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
      msg: '这是主页面'
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
</style>
