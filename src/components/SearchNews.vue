<template>
  <div class="wrapper">
    <InputComponent v-on:get-data="getDatas"></InputComponent>
    <div class="item-wrapper">
      <NewsItem v-for="data in datas" v-bind:key="data.url" v-bind="data"></NewsItem>
    </div>
  </div>
</template>

<script>
import InputComponent from "./Input.vue";
import { getSearchNews } from "../api";
import NewsItem from "./NewsItem";

export default {
  data() {
    return {
      datas: []
    };
  },
  methods: {
    async getDatas(value) {
      try {
        const datas = await getSearchNews(value);
        this.datas = datas;
      } catch (e) {
        console.log(e);
        this.datas = [];
      }
    }
  },
  components: {
    NewsItem: NewsItem,
    InputComponent: InputComponent
  }
};
</script>

<style scoped>
.item-wrapper {
  padding: 1rem;
}
</style>