<template>
    <div>
        <header-view></header-view>
        <!--面包屑导航-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a><i class="iconfont icon-jiantou1"></i><a href="javascript:;">公司动态</a>
            </h2>
        </div>
        </div>
        <!--页面主体-->
        <div class="main container">
            <div class="title">公司动态</div>
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
    .breadcrumb h2  i{
        font-size:12px;
    }
.title{
    font-size: 24px;
    line-height:30px;
    margin-top:30px;
}

</style>

