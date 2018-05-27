<template>
  <div class="hello">
    <Header></Header>
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
import Header from './Header.vue'
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
