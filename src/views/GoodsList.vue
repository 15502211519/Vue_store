<template>
  <div class="box">
    商品列表组件
    <button @click="handleAddSync">延迟修改数字</button>
    <h1>{{count}}</h1>
    <ul>
      <li v-for="(item,index) in fList" :key="index">
        商品：{{item.name}}
        价格：{{item.price}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.num
      },
      fList() {
        return this.$store.getters.filterList
      }
    },
methods: {
  handleAddSync() {
    this.$store.dispatch('incrementSync')
  }
},
  }
</script>

<style lang="less" scoped>

</style>