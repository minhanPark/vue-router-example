<template>
  <div class="wrapper">
    <NewsItem v-for="data in datas" v-bind:key="data.url" v-bind="data"></NewsItem>
  </div>
</template>

<script>
import { getLatestNews } from "../api";
import NewsItem from "../components/NewsItem";

export default {
  data() {
    return {
      datas: []
    };
  },
  async created() {
    const datas = await getLatestNews();
    this.datas = datas;
  },
  components: {
    NewsItem: NewsItem
  }
};
</script>

<style scoped>
.wrapper {
  padding: 1rem;
}
</style>
