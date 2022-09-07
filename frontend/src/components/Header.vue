<template>
  <header class="header">
    <img :src="require(`@/assets/images/grupo-a-logo.jpg`)" alt="Grupo A">
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
.header {
  grid-area: header;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  height: 7vh;
}
.header .title {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 100;
}
</style>