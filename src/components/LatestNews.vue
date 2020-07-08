<template>
  <div>최신뉴스</div>
</template>

<script>
import { getLatestNews } from "../api";

export default {
  data() {
    return {
      datas: []
    };
  },
  async created() {
    const datas = await getLatestNews();
    this.datas = datas;
  }
};
</script>

<style></style>
