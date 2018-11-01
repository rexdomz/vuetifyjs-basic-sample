

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm4 md4>
        <v-card color="grey darken-3" dark class="px-3">
          <v-card-title primary class="title">Login</v-card-title>
            <v-form v-model="valid">
                <v-text-field
                v-model="name"
                :rules="nameRules"
                
                label="Name"
                required
                ></v-text-field>
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
                <v-btn color="orange darken-2" type="submit">Submit</v-btn>
            </v-form>
        </v-card>
      </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    lorem:
      "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.",
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>

