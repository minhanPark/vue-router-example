<template>
  <div>최신뉴스</div>
</template>

<script>
import { getLatestNews } from "../api";

export default {
  data() {
    return {
      datas: [],
    };
  },
  async created() {
    const {
      data: { articles },
    } = await getLatestNews();
    this.datas = articles;
  },
};
</script>

<style></style>
