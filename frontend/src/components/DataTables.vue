<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="isLoading"
    :items-per-page="20"
    :search="searchString"
    item-key="cpf"
    loading-text="Carregando..."
    no-data-text="Nenhum registro encontrado."
    hide-default-footer
    class="no-border-radius full-border-solid"
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
          </div>
        </v-col>

        <v-col cols="3">
          <v-btn class="primary-color" x-large dark @click="newItem()">
            Cadastrar Aluno
          </v-btn>
        </v-col>
      </v-row>
    </template>

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
            @click="showConfirmDialog(item)"
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
</template>

<script>
export default {
  name: "DataTables",
  props: {
    headers: Array,
    items: Array,
    isLoading: Boolean,
  },
  data: () => {
    return {
        searchString: ''
    }
  },
  methods: {
    newItem() {
      this.$emit('newItem');
    },
    editItem(item) {
        this.$emit('editItem', item);
    },
    showConfirmDialog(item) {
        this.$emit('showConfirmDialog', item);
    }
  },
};
</script>