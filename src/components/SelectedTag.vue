<template>
  <div>
    <div class="list" v-for="(item, index) in getCategories" :key="index">
      <div :class="{ selected: item.status }" @click="item.status = !item.status">
        <div class="item">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCategories"]),
  },
  methods: {
    ...mapMutations(["addCategories"]),
  },
};
</script>

<style>
.list {
  display: inline-block;
  padding: 4px 15px;
}

.item {
  border: 1px solid burlywood;
  border-radius: 25px;
  padding: 4px 15px;
  cursor: pointer;
}

.selected{
  background-color: green;
  color: white;
  border-radius: 25px;
}


</style>
