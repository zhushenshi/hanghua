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
          <span>团队简介</span>
          <span></span>
        </div>
			<div style="border:1px solid #EAEAEA;width:100%;display:flex;">
				<div>
					<img src="./avatar.jpg" alt="" />
					<div></div>
				</div>
				<div>
					<h2>产品经理 / Kevin Kate</h2>
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
</style>

