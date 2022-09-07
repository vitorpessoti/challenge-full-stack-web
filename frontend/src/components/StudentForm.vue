<template>
  <div>
    <v-row>
      <v-col cols="8" class="d-flex">
        <v-text-field label="Nome" outlined filled disabled></v-text-field>
        <v-text-field label="Informe o nome completo" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" class="d-flex">
        <v-text-field label="E-mail" outlined filled disabled></v-text-field>
        <v-text-field label="Informe apenas um e-mail" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" class="d-flex">
        <v-text-field label="RA" outlined filled disabled></v-text-field>
        <v-text-field
          label="Informe o registro acadêmico"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" class="d-flex">
        <v-text-field label="CPF" outlined filled disabled></v-text-field>
        <v-text-field
          label="Informe o número do documento"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex">
        <v-btn elevation="2" large small class="secondary-color">Cancelar</v-btn>
        <v-btn elevation="2" large small class="primary-color">Salvar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "StudentForm",
};
</script>