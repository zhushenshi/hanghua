<template>
    <div>
        <header-view></header-view>
        <!--面包屑导航-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a><i class="iconfont icon-jiantou1"></i><a href="javascript:;">关于航华</a>
            </h2>
        </div>
        </div>
        <!--页面主体-->
        <div class=" container" style="padding-left:20px;">
        <div class="about">
            <div class="title">公司简介</div>
            <div class="about_img"><img src="../assets/images/about.jpg" alt=""/></div>
            <p>安徽航华电子科技有限公司前身致力于高校BOT合同能源管理，高校热水，开水系统的方案设计，产品供应，安装施工维护等。2015年，公司高层领导通过一年时间对市场的调研，2016年开始专注于做工程项目的热水及开水系统的研发，生产，销售，维护工程，主营业务：太阳能，空气能，燃气锅炉供热及采暖系统工程，太阳能空气能辅助热源供热系统，太阳能燃气锅炉辅助热源供热系统，空气能燃气锅炉辅助热源供热系统等热水循环系统；校园水，直饮水，水处理净化设备等饮水系统工程。公司专注于绿色环保能源，在热水及开水系统的解决方案上有很强的专业技能及施工经验，公司有完善的管理体系，在安徽的各个区域有一对一的市场部经理提供方案设计及工程规划，同时，工程部有专业的团队负责施工及调试运营，并有技术过硬的售后维护人员随时准备着为用户提供技术支持及售后维护。新世纪的今天，除了要提供过硬的产品外，客户需要更加完善的售后服务体系及良好的服务态度，公司一直秉承于“用心服务，诚信经营”八字方针，让客户满意及认可将是我公司永不改变的方针。2018年，我公司一定会在专业技能，服务体系更加完善的基础上，与用户朋友们共同进步，共筑明天事业的辉煌！</p>
            <h3>企业文化：</h3>
            <p> 一家人，一条心，一起拼，一定赢。</p>
            <h3>企业口号：</h3>
            <p>扬帆起航  爱我中华。</p>
            <h3>企业宗旨：</h3>
            <p>用心服务，诚信经营；以人为本，以德服人。</p>
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
        /* position:fixed;
        top:60px;
        width: 100%; */
        margin-top:60px;
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
    .breadcrumb h2  i{
        font-size:12px;
    }
.about {
    /* margin-top: 100px; */
    width:80%;
}
.about .title{
    font-size: 24px;
}
.about_img {
    margin-top:30px;
    padding-left:10px;
}
.about_img img {
    max-width: 100%;
}
.about p {
    padding: 0 20px;
    font-size: 14px;
    /* text-indent: 28px; */
    color:#888888;
    margin: 10px 0;
    line-height: 35px;
}
</style>

