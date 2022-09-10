<template>
  <div class="text-center">
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'LoaderOverlay',
  props: {
    isLoading: Boolean
  }
};
</script>