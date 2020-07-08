<template>
  <div id="app">
    <div>
      <Header></Header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header: Header
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #ecf0f1;
}
</style>
