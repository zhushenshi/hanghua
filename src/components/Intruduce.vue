<template>
    <div>
	<header-view></header-view>
        <!--面包屑导航-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a>&gt;<a href="javascript:;">关于航华</a>
            </h2>
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
</style>

