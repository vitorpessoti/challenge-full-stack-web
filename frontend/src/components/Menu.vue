<template>
  <div class="nav-drawer">
    <v-navigation-drawer class="side-menu">
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Módulo Acadêmico
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item href="/alunos">
          <v-list-item-title>Alunos</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data: () => {
    return {
      items: [{ title: "Alunos", path: "/alunos" }],
      right: null,
    };
  },
  methods: {
    logout: () => {
      console.log("trying to logout.");
    },
  },
};
</script>

<style>
.nav-drawer {
  height: 100%;
}
.side-menu {
  background-color: gainsboro !important;
}
</style>