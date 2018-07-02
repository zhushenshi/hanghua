<template>
    <div>
	<header-view></header-view>
        <!--���м����-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">��ҳ</a>&gt;<a href="javascript:;">�Ŷӽ���</a>
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
</style>

