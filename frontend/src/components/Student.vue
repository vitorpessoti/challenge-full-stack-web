<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      class="elevation-1"
      :loading="tableLoading"
      loading-text="Carregando..."
      no-data-text="Nenhum registro encontrado."
      :items-per-page="20"
      hide-default-footer
      :search="searchString"
    >
      <template v-slot:top>
        <v-row dense class="pa-4 searchBar">
          <v-col cols="9">
            <div class="d-flex">
              <v-text-field
                v-model="searchString"
                label="Digite sua busca"
                outlined
              ></v-text-field>
              <!-- <v-btn dark color="grey"> Pesquisar </v-btn> -->
            </div>
          </v-col>

          <v-col cols="3">
            <v-btn class="primary-color" x-large dark @click="novo()">
              Cadastrar Aluno
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <!-- <template v-slot:top>
        <v-row dense class="pa-4">
          <h3>Categorias</h3>
        </v-row>
        <v-toolbar flat color="white">
          <v-row dense>
            <v-col cols="3" v-if="NrRegFiltro !== null">
              <span style="font-size: 0.7rem"
                >Filtro aplicado no <strong>{{ filtroEscolhido }}</strong
                >, {{ NrRegFiltro }} registro(s) encontrado(s).</span
              >
              <v-btn
                class="mx-5 mt-2"
                x-small
                dark
                fab
                color="error"
                @click="LimpaFiltro()"
              >
                <v-icon dark class="ml-1">mdi-eraser</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="2">
              <v-select
                v-model="filtroEscolhido"
                :items="itemsFiltro"
                label="Escolha o campo"
              >
              </v-select>
            </v-col>

            <v-col cols="2">
              <v-text-field
                placeholder="digite aqui..."
                v-model="stringFiltro"
                :disabled="!filtroEscolhido"
              ></v-text-field>
            </v-col>

            <v-col cols="1">
              <v-btn
                class="mx-5 mt-2"
                x-small
                dark
                color="indigo"
                @click="filtraRegistro(filtroEscolhido, stringFiltro)"
              >
                <v-icon dark class="ml-1">mdi-account-search</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="1">
              <v-btn class="mx-5 mt-2" dark color="indigo" @click="novo()">
                Cadastrar Aluno
              </v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
      </template> -->

      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              class="ml-1"
              @click="editItem(item)"
              v-bind="attrs"
              v-on="on"
              v-text="`[Editar]`"
              plain
            ></v-btn>
          </template>
          <span>Editar aluno</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              class="ml-1"
              @click="deleteItem(item)"
              v-bind="attrs"
              v-on="on"
              v-text="`[Excluir]`"
              plain
            ></v-btn>
          </template>
          <span>Excluir aluno</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "StudentComponent",
  data: () => {
    return {
      headers: [
        {
          text: "Registro Acadêmico",
          value: "ra",
          align: "center",
          width: 50,
          caption: "title",
        },
        {
          text: "Nome",
          value: "name",
          align: "center",
          width: 200,
          caption: "title",
        },
        {
          text: "CPF",
          value: "cpf",
          align: "center",
          width: 15,
          caption: "title",
        },
        {
          text: "Ações",
          value: "actions",
          align: "center",
          width: 40,
          caption: "title",
        },
      ],
      items: [
        {
          ra: 100001,
          name: "Paula Souza",
          cpf: "121.999.999-99",
        },
        {
          ra: 100002,
          name: "João Silva",
          cpf: "122.999.999-99",
        },
        {
          ra: 100003,
          name: "Marina Miranda",
          cpf: "123.999.999-99",
        },
        {
          ra: 100004,
          name: "Maurício Souza",
          cpf: "124.999.999-99",
        },
      ],
      tableLoading: false,
      filtroEscolhido: null,
      searchString: "",
    };
  },
  methods: {
    editItem() {
      this.$router.push({
        name: "alunos-form",
        // params: {
        //   order_id: parseInt(this.id_pedido),
        // },
      });
    },
    deleteItem(item) {
      console.log("deleting", item);
    },
  },
};
</script>

<style>
.searchBar {
  align-items: baseline;
}
</style>