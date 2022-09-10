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
    <DataTables 
      :headers="headers"
      :items="items"
      :isLoading="tableLoading"
      @newItem="newItem"
      @editItem="editItem"
      @showConfirmDialog="showConfirmDialog"
    />
  </div>
</template>

<script>
import { getStudents, deleteStudent } from "../../../services/student-service";
import LoaderOverlay from "../../Loader.vue";
import DefaultDialog from "../../DefaultDialog.vue";
import ConfirmDialog from "../../ConfirmDialog.vue";
import DataTables from "../../DataTables.vue";

export default {
  name: "StudentComponent",
  components: {
    LoaderOverlay,
    DefaultDialog,
    ConfirmDialog,
    DataTables,
  },
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