<template>
    <div>
        <!--面包屑导航-->
        <div class="breadcrumb">
            <div class="container">
                <h2>
                    <a href="">首页</a>&gt;<a href="javascript:;">关于航华</a>
                </h2>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
  name:'Breadcrumb',
  data () {
    return {
      msg: '',
    }
  },
  created (){},
  methods: {
    
  },
  components: {
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

