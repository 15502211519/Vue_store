<template>
  <div class="box">
    <p>主页组件</p>
    <button @click="handlePlus">状态机数字{{count}}</button>
    <ul>
      <li v-for="(item,index) in gList" :key="index">
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
      return this.$store.state.num;
    },
    gList() {
      return this.$store.state.glist;
    }
  },
  methods: {
    handlePlus() {
      this.$store.commit('increment');

      this.$store.commit('addGoodList', {
        name: '新商品',
        price: (Math.random() * 70 + 30).toFixed(2)
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>