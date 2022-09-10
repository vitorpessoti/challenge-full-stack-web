<template>
  <div>
    <LoaderOverlay :isLoading="isLoading" />
    <DefaultDialog
      v-if="isDialogVisible"
      :visible="isDialogVisible"
      :title="dialogTitle"
      :body="dialogBody"
      @closeHandler="afterCloseDialog"
    />
    <ConfirmDialog
      v-if="isConfirmDialogVisible"
      :visible="isConfirmDialogVisible"
      :title="confirmDialogTitle"
      :body="confirmDialogBody"
      @cancel="deletionCancelled"
      @confirm="deletionConfirmed"
    />
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="tableLoading"
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
              <!-- <v-btn dark color="grey"> Pesquisar </v-btn> -->
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
  </div>
</template>

<script>
import { getStudents, deleteStudent } from "../services/student-service";
import LoaderOverlay from "./Loader.vue";
import DefaultDialog from "./DefaultDialog.vue";
import ConfirmDialog from "./ConfirmDialog.vue";
export default {
  name: "StudentComponent",
  components: { LoaderOverlay, DefaultDialog, ConfirmDialog },
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
      items: [],
      searchString: "",
      tableLoading: false,
      isLoading: false,
      isDialogVisible: false,
      dialogTitle: "",
      dialogBody: "",
      isConfirmDialogVisible: false,
      confirmDialogTitle: "",
      confirmDialogBody: "",
      selectedStudent: null,
    };
  },
  methods: {
    async getStudents() {
      this.isLoading = true;
      this.tableLoading = true;
      this.items = [];
      const response = await getStudents();
      this.items = response.item;
      this.tableLoading = false;
      this.isLoading = false;
    },
    newItem() {
      this.$router.push({
        path: "/alunos-form",
      });
    },
    editItem(item) {
      this.$router.push({
        path: "/alunos-form",
        query: {
          student: item,
          name: item.name,
        },
      });
    },
    async deleteItem(item) {
      const response = await deleteStudent(item.ra);
      this.dialogTitle = "Exclusão de aluno";
      this.dialogBody = response.message;
      this.isDialogVisible = true;
    },
    showConfirmDialog(item) {
      this.selectedStudent = item;
      this.confirmDialogTitle = "Exclusão de aluno";
      this.confirmDialogBody = `Tem certeza que deseja excluir o aluno <strong>${item.name.trim()}</strong>?`;
      this.isConfirmDialogVisible = true;
    },
    afterCloseDialog(value) {
      this.isDialogVisible = value;
      this.getStudents();
    },
    deletionCancelled(value) {
      this.isConfirmDialogVisible = value;
    },
    async deletionConfirmed(value) {
      this.isConfirmDialogVisible = value;
      this.isLoading = true;
      await this.deleteItem(this.selectedStudent);
      this.selectedStudent = false;
      this.isLoading = false;
    },
  },
  async mounted() {
    this.getStudents();
  },
};
</script>

<style>
.searchBar {
  align-items: baseline;
}
</style>