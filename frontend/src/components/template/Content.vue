<template>
  <v-container fluid id="app" class="no-padding">
    <div id="login-content" v-if="currentRouteName.toLowerCase() === 'login'">
      <Login />
    </div>

    <div id="app-content" v-else>
      <v-card id="main-card">
        <v-card-title>
          <HeaderComponent />
        </v-card-title>
        <v-card-text style="padding: 0 2.5em">
          <v-row>
            <v-col cols="2" class="no-padding">
              <v-card class="no-border-radius tabs-card">
                <v-card-title class="secondary-color"
                  >Módulo Acadêmico</v-card-title
                >
                <v-card-text class="tabs-card-content">
                  <v-tabs vertical>
                    <v-tab to="/alunos">Alunos</v-tab>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="10" id="data-table-content" class="no-padding">
              <v-card>
                <v-card-title class="main-content-title">{{
                  currentRouteName
                }}</v-card-title>
                <!-- <v-card-text> -->
                <router-view />
                <!-- </v-card-text> -->
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Login from "../pages/auth/Login.vue";
import HeaderComponent from "./Header.vue";
export default {
  name: "ContentComponent",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  components: { Login, HeaderComponent },
};
</script>
    