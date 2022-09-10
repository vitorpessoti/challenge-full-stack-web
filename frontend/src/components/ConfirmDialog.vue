<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog :value="visible" transition="dialog-bottom-transition" max-width="600">
        <v-card>
          <v-toolbar class="primary-color">{{ title }}</v-toolbar>
          <v-card-text>
            <div class="pa-12" v-html="body"></div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="cancel()">Não</v-btn>
            <v-btn color="red" text @click="confirm()">Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

  <script>
export default {
  name: "DefaultDialog",
  props: {
    visible: Boolean,
    title: String,
    body: String
  },
  methods: {
    confirm() {
      this.$emit('confirm', false);
    },
  },
};
</script>