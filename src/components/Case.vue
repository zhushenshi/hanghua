<template>
    <div>
        <header-view></header-view>
        <!--面包屑导航-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a><i class="iconfont icon-jiantou1"></i><a href="javascript:;">工程案例</a>
            </h2>
        </div>
        </div>
        <!--页面主体-->
        <div class="main container">
            <div>工程案例</div>
            <div>公司致力于为学校、酒店、医院、企事业单位等提供定制化的热水、采暖、净水集成综合解决方案，助力低碳工业与生态农业发展，利用清洁能源让生活更加美好。</div>
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

</style>

