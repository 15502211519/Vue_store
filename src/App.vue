<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import store from './store/index'
import Main from './views/Main.vue'

export default {
  store,
  name: 'App',
  components: {
    Main
  },
  

};
</script>

<style lang="less" scoped>
.box{
  color: red;
}
</style>
