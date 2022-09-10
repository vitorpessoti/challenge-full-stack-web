<template>
  <div class="pt-5 pb-5 no-border-radius full-border-solid">
    <v-row dense class="pl-5">
      <v-col cols="8" class="d-flex">
        <v-text-field label="Nome" outlined filled disabled></v-text-field>
        <v-text-field
          v-model="student.name"
          label="Informe o nome completo"
          outlined
          :rules="[rules.required]"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row dense class="pl-5">
      <v-col cols="8" class="d-flex">
        <v-text-field label="E-mail" outlined filled disabled></v-text-field>
        <v-text-field
          v-model="student.email"
          label="Informe apenas um e-mail"
          outlined
          :rules="[rules.required, rules.email(student.email)]"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row dense class="pl-5">
      <v-col cols="8" class="d-flex">
        <v-text-field label="RA" outlined filled disabled></v-text-field>
        <v-text-field
          v-model="student.ra"
          outlined
          filled
          :readonly="true"
          :disabled="student.ra.length === 0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row dense class="pl-5">
      <v-col cols="8" class="d-flex">
        <v-text-field label="CPF" outlined filled disabled></v-text-field>
        <v-text-field
          v-model="student.cpf"
          v-mask="'###.###.###-##'"
          outlined
          :label="
            student.ra.length === 0 ? 'Informe o número do documento' : ''
          "
          :readonly="student.ra.length !== 0"
          :filled="student.ra.length !== 0"
          :rules="[rules.required]"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense class="pl-5 flex-row">
      <v-col cols="12" class="d-flex flex-row-reverse pr-5">
        <v-btn elevation="2" large small class="primary-color" @click="save()"
          >Salvar</v-btn
        >
        <v-btn
          elevation="2"
          large
          small
          class="secondary-color mr-3"
          @click="goToStudentsList()"
          >Cancelar</v-btn
        >
      </v-col>
    </v-row>

    <LoaderOverlay :isLoading="isLoading" />
    <DefaultDialog
      :visible="isDialogVisible"
      :title="dialogTitle"
      :body="dialogBody"
      @closeHandler="afterCloseDialog"
    />
  </div>
</template>

<script>
import { createStudent, updateStudent } from "../services/student-service";
import LoaderOverlay from "./Loader.vue";
import DefaultDialog from "./DefaultDialog.vue";

export default {
  name: "StudentForm",
  components: {
    LoaderOverlay,
    DefaultDialog,
  },
  data: () => {
    return {
      student: {
        ra: "",
        name: "",
        email: "",
        cpf: "",
      },
      isLoading: false,
      isDialogVisible: false,
      dialogTitle: "",
      dialogBody: "",
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido!";
        },
      },
    };
  },
  methods: {
    async save() {
      this.isLoading = true;
      let response = null;
      if (this.student.ra.length === 0) {
        response = await createStudent(this.student);
      } else {
        response = await updateStudent(this.student);
      }
      this.isLoading = false;
      this.dialogTitle = "Cadastro de Alunos";
      this.dialogBody = response.message;
      this.isDialogVisible = true;
    },
    afterCloseDialog(value) {
      this.isDialogVisible = value;
      this.goToStudentsList();
    },
    goToStudentsList() {
      this.$router.push({
        path: "/alunos",
      });
    },
  },
  mounted() {
    if (this.$route.query.student) this.student = this.$route.query.student;
  },
};
</script>