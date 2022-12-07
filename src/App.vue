<template>
  <div id="app">
    <div>
      {{ count }}
      <button @click="increment()">Increase</button>
    </div>
    <div>
      {{ getName }}
      <input type="text" v-model="new_name" />
      <button @click="setName(new_name)">Change name</button>
    </div>
    <div>
      <SelectedTag />
    </div>
    <div>
      <button @click="getAllProduct()">Click</button>
      <div v-for="(product, index) in getProducts" :key="index">
        {{(index + 1)}}. {{product.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import SelectedTag from "./components/SelectedTag.vue";

export default {
  name: "App",
  data() {
    return {
      new_name: "",
    };
  },
  components: {
    SelectedTag,
  },
  computed: {
    ...mapGetters(["count", "getName", "getProducts"]),
  },
  methods: {
    ...mapMutations(["increment", "setName"]),
    ...mapActions(["getAllProduct"]),
  },
};
</script>

<style scoped>
#app {
  max-width: 50%;
  position: relative;
}
</style>
