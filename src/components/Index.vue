<template>
  <div>
    <header-view></header-view>
    <!-- <h1>{{ msg }}</h1>     -->
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderView from '@/components/Header.vue'

export default {
  name:'Index',
  data () {
    return {
      msg: '这是主页面'
    }
  },
  components: {
    HeaderView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
