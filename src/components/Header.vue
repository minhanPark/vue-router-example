<template>
  <div class="header-background">
    <div class="header-wrapper">
      <h1>뉴스 보기</h1>
      <ul>
        <li>
          <router-link to="/">최신 뉴스보기</router-link>
        </li>
        <li>
          <router-link to="/search">뉴스 검색하기</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-background {
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.header-wrapper {
  width: 100%;
  max-width: 1100px;
  display: flex;
  height: 60px;
  align-items: center;
}
h1 {
  color: #bdc3c7;
  margin: 0;
  flex: 1;
  text-align: center;
}
ul {
  display: flex;
  padding: 0;
}
li {
  list-style-type: none;
}
li:nth-child(2) {
  margin-left: 16px;
}
a {
  text-decoration: none;
  padding: 4px 8px;
}
a:hover {
  text-decoration: underline;
}
a:focus,
a:visited,
a:active {
  color: #bdc3c7;
}
</style>