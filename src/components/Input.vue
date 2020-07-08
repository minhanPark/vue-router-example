<template>
  <div class="wrapper">
    <input v-model="inputValue" />
    <button v-on:click="handleClick">검색</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    handleClick() {
      const value = this.inputValue;
      if (value) {
        this.$emit("get-data", value);
        this.clearValue();
      } else {
        alert("값을 입력해주세요.");
      }
    },
    clearValue() {
      this.inputValue = "";
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin: 2rem auto;
  width: 80%;
  display: flex;
  padding: 6px 0;
  border-bottom: 1px solid #2c3e50;
}
input {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 8px 12px;
  flex: 1;
}
</style>