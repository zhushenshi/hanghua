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
        </div>
        <div class="item">
          <div class="avatar">
            <img src="../assets/images/avatar.jpg" alt="" />
            <div class="cover">
              <!-- http://5a4ed3e611bcf.t73.qifeiye.com/?page_id=13205 -->
				<img src="../assets/images/big-black-plus.png" alt="" />
            </div>
          </div>
          <div class="text" @click="changeShow()">
            <div class="name"><span>----</span>产品经理 / Kevin Kate</div>
            <div class="intruduce">高圆圆，1979年10月5日出生于北京市，中国内地影视女演员、模特。</div>
          </div>
        </div>
      </div>
	  <div class="details" v-show="isShow">
		<div class="imgBox"><img src="../assets/images/big-black-plus.png" alt="" /></div>
		<div class="details">高圆圆，1979年10月5日出生于北京市，中国内地影视女演员、模特。</div>
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
      msg: 'hello',
      group:[{name:'高圆圆',pic:'',details:"高圆圆，1979年10月5日出生于北京市，中国内地影视女演员、模特。"},],
	 isShow:false
    }
  },
  created (){},
  methods: {
    changeShow(){
	this.isShow=this.isShow?true:false;
    },
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
.main .title .line{border-bottom:4px solid #666;width:60px;margin-top:10px;}
.main .item{border:1px solid #EAEAEA;width:100%;display:flex;margin-top:15px;}
.main .item .avatar{position:relative;height:200px;}
.main .item .avatar img{height:100%;}
.main .item .avatar .cover{box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#FFF;transition:all .5s linear;opacity:0;text-align:center;}
.main .item .avatar .cover:hover{opacity:0.6;padding-top:30%;}
.main .item .avatar .cover img{height:40%;}
.main .item .text{margin-left:20px;}
.main .item .text .name{height:50%;padding-top:50px;box-sizing: border-box;font-size:20px;}
.main .item .text .intruduce{font-size:16px;color:#999999;}
.details{width:80%;height:80%;position:fixed;}
.details img{width:100%;height:100%;}

</style>

