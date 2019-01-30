<template>
  <div class="introduce">
    <header-view></header-view>
      <!--面包屑导航-->
      <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a>&gt;<a href="/introduce">招贤纳士</a>
            </h2>
        </div>
      </div>
      <div class="main">
        <div class="title">
          <div>加入我们</div>
          <div class="line"></div>
        </div>
        <div class="item" @click="showDetail(index)" v-for="(item,index) in group" :key="index">
          <div class="avatar">
            <img :src="item.pic" alt="" />
            <div class="cover">
              <!-- http://5a4ed3e611bcf.t73.qifeiye.com/?page_id=13205 -->
				      <div class="imgBox"><img src="../assets/images/big-black-plus.png" alt="" /></div>
            </div>
          </div>
          <div class="text">
            <div class="name">{{item.name}}</div>
            <div class="intruduce">{{item.details}}</div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="detail" v-show="isShow">
          <div class="box" :style="{backgroundImage: 'url('+details.pic+')'}">
            <div class="close" @click="showDetail()"><span class="iconfont icon-close2"></span></div>
              <!-- <div class=""><img src="../assets/images/avatar.jpg" alt="" /></div> -->
            <div class="details">
              <div>{{details.name}}</div>
              <div>{{details.details}}</div>
            </div>
          </div>
        </div>
      </transition>
    <footer-view></footer-view>   
  </div>
</template>
<script>
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'
import('../fonts/icon-font/iconfont.css')

export default {
  name:'About',
  data () {
    return {
      msg: 'hello',
      group:[
      {name:'高圆圆',
      pic:require('../assets/images/avatar.jpg'),
      details:"高圆圆，1979年10月5日出生于北京市，中国内地影视女演员、模特。"
      },
      {name:'高圆圆1',
      pic:require('../assets/images/avatar.jpg'),
      details:"高圆圆，1979年10月5日出生于北京市，中国内地影视女演员、模特。"
      }
      ],
      details:{

      },
	 isShow:false
    }
  },
  created (){},
  methods: {
    showDetail(index){
      this.isShow=this.isShow?false:true;
      this.details=Object.assign({}, this.details,this.group[index])

    },
  },
  components: {
    HeaderView,
    FooterView
  }
}
</script>
<style scoped>
.main{width:1200px;margin:10px auto 0;padding-left:15px;}
.main .title{font-size:24px;font-weight:bold;}
.main .title .line{border-bottom:4px solid #666;width:60px;margin-top:10px;margin-bottom:20px;}
.main .item{border:1px solid #EAEAEA;width:100%;display:flex;margin-top:18px;}
.main .item .avatar{position:relative;height:200px;}
.main .item .avatar img{height:100%;}
.main .item .avatar .cover{box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#FFF;opacity:0;text-align:center;}
.main .item .avatar .cover .imgBox{width:100%;position:absolute;top:0;transition:all .5s linear;}
.main .item .avatar .cover:hover{opacity:0.6;}
.main .item .avatar .cover:hover .imgBox{top:50%;transform:translateY(-50%);}
.main .item .avatar .cover img{height:40%;}
.main .item .text{margin-left:20px;}
.main .item .text .name{height:50%;padding-top:50px;box-sizing: border-box;font-size:20px;position:relative;}
.main .item .text .intruduce{font-size:16px;color:#999999;}
.detail{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;background-color:rgba(0, 0, 0, 0.6);text-align:center;color:#ccc;}
.box{width:80%;height:80%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;background-size:cover;background-position:center center;}
.close{text-align:right;position:absolute;right:10px;top:10px;}
.details{width:100%;position:absolute;bottom:0;background-color:rgba(0, 0, 0, 0.8);line-height:20px;padding: 15px 15px;;text-align:left;box-sizing: border-box;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

