import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    name: "",
    categories: [
      { name: "Quần", status: false },
      { name: "Quần đỏ", status: false },
      { name: "Quần xanh", status: false },
      { name: "Quần vàng", status: false },
      { name: "Quần nâu", status: false },
    ],
    products: [],
  },
  getters: {
    count: (state) => state.count,
    getName: (state) => state.name,
    getCategories: (state) => state.categories,
    getProducts: (state) => state.products,
  },
  mutations: {
    increment(state) {
      state.count += 2;
    },
    setName(state, newName) {
      state.name = newName;
    },
    addCategories(state, content) {
      state.categories.push(content);
    },

    getProduct(state, products) {
      state.products = products;
    },
  },

  actions: {
    async getAllProduct(context) {
      let data = await axios.get(`http://localhost:8080/api/products/get`);
      console.log(data)
      context.commit("getProduct", data.data.product)
    }
  },
});

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
