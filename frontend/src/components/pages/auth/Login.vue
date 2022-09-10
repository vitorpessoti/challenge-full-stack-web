<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card outlined tile>
        <v-card-title>Challenge Full-stack</v-card-title>
        <v-card-text>
          <v-row dense class="pl-5">
            <v-col cols="12" class="d-flex">
              <v-text-field
                v-model="user.email"
                label="E-mail"
                outlined
                :rules="[rules.required, rules.email(user.email)]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense class="pl-5">
            <v-col cols="12" class="d-flex">
              <v-text-field
                v-model="user.password"
                label="Senha"
                type="password"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row dense class="flex-row">
            <v-col cols="12" class="d-flex flex-row-reverse pr-3 pb-3">
              <v-btn class="primary-color" @click="signIn()"> Entrar </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
      <LoaderOverlay :isLoading="isLoading" />
      <DefaultDialog
        :visible="isDialogVisible"
        :title="dialogTitle"
        :body="dialogBody"
        @closeHandler="afterCloseDialog"
      />
    </v-col>
  </v-row>
</template>

<script>
import { login } from "../../../services/auth-service";
import LoaderOverlay from "../../Loader.vue";
import DefaultDialog from "../../DefaultDialog.vue";
export default {
  name: "LoginComponent",
  components: { LoaderOverlay, DefaultDialog },
  data: () => {
    return {
      user: {
        email: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido!";
        },
      },
      isLoading: false,
      isDialogVisible: false,
      dialogTitle: "",
      dialogBody: "",
    };
  },
  methods: {
    async signIn() {
      this.isLoading = true;

      try {
        const response = await login(this.user);
        if (response.success) {
          localStorage.setItem("__challenge_token", response.token);
          this.$router.push({
            path: "/alunos",
          });
        } else {
          this.dialogTitle = "Falha na autenticação";
          this.dialogBody = "Usuário ou senha incorretos.";
          this.isDialogVisible = true;
        }
      } catch (error) {
        this.dialogTitle = "Falha na autenticação";
        this.dialogbody = "Usuário ou senha incorretos.";
        this.isDialogVisible = true;
      }

      this.isLoading = false;
    },
    afterCloseDialog(value) {
      this.isDialogVisible = value;
    },
  },
};
</script>