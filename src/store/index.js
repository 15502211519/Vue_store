import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
  state: {  //相当于组件中的data
    num: '666',
    glist: [
      { name: '商品1', price: 19 },
      { name: '商品2', price: 199 },
      { name: '商品3', price: 99 },
      { name: '商品4', price: 9.9 },
      { name: '商品5', price: 0.9 },
    ]
  },
  mutations: {
    increment(state) {  //相当于组件中的methods,传参为state固定
      state.num++
    },
    addGoodList(state,obj) {
      state.glist.push(obj)
    }

  },
  getters: {
    filterList(state) {  //对应computed计算属性
      return state.glist.filter((item)=> {
        return item.price>50
      })
    }
  },
  actions:{
    incrementSync(context){
      setTimeout(() => {
        context.commit('increment')
      }, 2000);
    }
  }
})

export default store