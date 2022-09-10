<template>
  <v-app>
    <v-main id="app">
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./components/template/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage
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

#login-content {
  height: 100vh;
  display: flex;
  align-items: center;
}

#main-card {
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

.full-border-solid {
  border: 2px solid black;
}

.v-data-table__wrapper {
  border-top: 2px solid black;
}

.v-data-table-header {
  tr {
    background-color: #cccccc;

    th {
      color: black !important;
    }
  }
}

.v-data-table table tbody tr:nth-child(even) > td {
  background-color: #ececec;
}

.no-padding {
  padding: 0;
}

.no-border-radius {
  border-radius: 0 !important;
}

.tabs-card {
  border: 2px solid black !important;
  border-right: 0 !important;
  height: 100%;
}

.tabs-card-content {
  border-top: 2px solid black;
  padding: 0;
}

.v-tab--active {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.main-content-title {
  background-color: #e6e6e6;
  letter-spacing: normal;
  font-weight: normal;
  border: 2px solid black;
  border-bottom: 0;
}

.content {
  grid-area: content;
  background-color: #efefef;
  padding: 20px;
}

.v-application--wrap {
  background-color: #efefef;
}

.v-card__title {
  justify-content: center;
}

.main-content {
  border: 2px solid black;
}
</style>
