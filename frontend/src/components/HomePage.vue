<template>
  <div class="corpo">
    <v-app id="inspire">
      <HeaderComponent />
      <!-- <v-layout wrap id="content"> -->
        <!-- <v-flex xs12 sm2>
          <MenuComponent />
        </v-flex> -->
        <!-- <v-flex xs12 sm10> -->
          <ContentComponent />
        <!-- </v-flex> -->
      <!-- </v-layout> -->
    </v-app>
  </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import ContentComponent from "./Content.vue";
// import MenuComponent from "./Menu.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    ContentComponent,
    // MenuComponent,
  },
};
</script>

<style>
#content {
  height: 93vh;
}
</style>