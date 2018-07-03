<template>
  <div>
    <header-view></header-view>
      <!--面包屑导航-->
      <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a>&gt;<a href="javascript:;">业务团队</a>
            </h2>
        </div>
      </div>
      <div class="main">
        <div class="title">
          <div>团队简介</div>
          <div class="line"></div>
          <div class="item">
              <div class=""></div>
          </div>
        </div>
		  <div style="border:1px solid #EAEAEA;width:100%;display:flex;">
				<div style="position:relative;">
					<img src="./avatar.jpg" alt="" />
					<div style="position:absolute;top:0;left:0;width:100%;height:100%;background-color:#FFF;opacity:0.6;">
					http://5a4ed3e611bcf.t73.qifeiye.com/?page_id=13205
					</div>
				</div>
				<div>
					<h2><span>这里是一条横线</span>产品经理 / Kevin Kate</h2>
					<p>高圆圆，1979年10月5日出生于北京市，中国内地影视女演员、模特。</p>
				</div>
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
      group:[{name:'',pic:''},]
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
.main{width:1200px;margin:0 auto;}
.main .title{font-size:24px;font-weight:bold;}
.main .title .line{border-bottom:5px solid #000;width:100px;margin-top:10px;}
</style>

