<template>
<div>
  <header-view></header-view>
  <div class="header_box"></div>
<!--面包屑导航-->
<div class="breadcrumb">
  <div class="container">
    <h2>
      <a href="">首页</a>&gt;<router-link to="contac">联系我们</router-link>
    </h2>
  </div>
</div>
<!--页面主体-->
<div class="main container">
  <div class="contect">
    <h2></h2>
    <h3>
      全国服务电话：0551-65233616	0551-65233616(线下代理)    周一至周日9:00-18:00(仅收市话费)<br>
      金牌售后客服：18225651998
    </h3>
    <h4>安徽航华科技有限公司</h4>
    <p>地 址：安徽省合肥市瑶海区信地藏龙阁15栋1408室<br>
      邮 箱：hanghuakeji@163.com<br>
      电 话：0551-65233616</p>
  </div>
</div>
<footer-view></footer-view>  
</div>
</template>
<script>
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'

export default {
  name:'About',
  data () {
    return {
      msg: '',
    }
  },
  created (){},
  methods: {
    
  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>
<style scoped>
    .breadcrumb {
        height:40px;
        background: #f1f1f1;
        border-top:2px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    .breadcrumb h2 {
        padding-left: 17px;
        line-height: 40px;
        font-size: 15px;
        font-weight: lighter;
        color: #666;
    }
    .breadcrumb h2 a {
        padding: 0 10px;
    }
    .contect {
    padding: 55px 70px 500px;
    color:#666;
    background: url(../assets/images/contact.jpg) center bottom no-repeat;
}
.contect>h3 {
    margin-top: 25px;
    font-weight: lighter;
    font-size: 18px;
    line-height: 40px;
}
.contect>h4 {
    margin-top: 20px;
    font-weight: lighter;
    font-size: 18px;
}
.contect>p {
    margin-top: 6px;
    font-size: 14px;
    line-height: 30px;
}
</style>
