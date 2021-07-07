<template>
  <div>
    <!-- 这是项目主组件 -->
    <Home/>
    <GoodsList/>
  </div>
</template>

<script>
import Home from './Home.vue';
import GoodsList from './GoodsList.vue';

export default {
  components: {
    Home,
    GoodsList
  }
};
</script>

<style lang="less" scoped>
.box{
  border: 1px solid #333;
  width: 50%;
  float: left;
  height: 400px;
  box-sizing: border-box
}
</style>