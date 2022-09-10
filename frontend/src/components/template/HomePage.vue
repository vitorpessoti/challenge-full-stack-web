<template>
  <div class="corpo">
    <v-app id="inspire">
      <ContentComponent />
    </v-app>
  </div>
</template>

<script>
import ContentComponent from "./Content.vue";
// import MenuComponent from "./Menu.vue";
export default {
  name: "HomePage",
  components: {
    ContentComponent,
  },
};
</script>

<style>
#content {
  height: 93vh;
}
</style>