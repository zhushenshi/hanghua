<template>
  <div class="hello">
    <header-view></header-view>
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
import HeaderView from '@/components/Header.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是主页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
