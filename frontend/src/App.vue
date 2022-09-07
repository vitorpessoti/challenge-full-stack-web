<template>
  <v-app>
    <v-main id="app">
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
.nav-drawer {
  z-index: 9;
}

.primary-color {
  background-color: #999999 !important;
  color: white !important;
}

.secondary-color {
  background-color: #c0c0c0 !important;
  color: white !important;
}

.v-data-table-header {
  tr {
    background-color: #cccccc;

    th {
      color: black !important;
    }
  }
}

.v-data-table table tbody tr:nth-child(even)>td {
    background-color: #ececec;
}
</style>
