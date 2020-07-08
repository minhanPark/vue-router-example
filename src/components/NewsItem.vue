<template>
  <div class="wrapper">
    <div class="img-wrapper">
      <img v-if="urlToImage" v-bind:src="urlToImage" />
      <img
        v-else
        src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
      />
    </div>
    <div class="content-wrapper">
      <h2>{{title}}</h2>
      <p>{{description}}</p>
      <div>
        <a v-bind:href="url" target="_blank">
          <span>원문기사 보러 가기</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "url", "urlToImage"]
};
</script>

<style scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 0.8rem 1rem;
  border: 1px solid #95a5a6;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 1rem;
}
.img-wrapper {
  width: 20%;
  position: relative;
}
.img-wrapper::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.content-wrapper {
  width: 80%;
  margin-left: 1rem;
}
.content-wrapper h2 {
  font-size: 18px;
}
a:visited,
a:active,
a:link {
  color: #34495e;
}
a {
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>