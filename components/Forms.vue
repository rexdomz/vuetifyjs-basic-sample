

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm4 md4>
        <v-card color="grey darken-3" dark class="px-3">
          <v-card-title primary class="title">Sample Form</v-card-title>
          
            <!--<v-form v-model="valid">-->
            <v-form ref="form" v-model="valid" lazy-validation>    
                <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required
                ></v-text-field>
               
                <v-flex>
                    <v-menu
                        ref="menu"
                        :close-on-content-click="false"
                        v-model="menu"
                        :nudge-right="40"
                        :return-value.sync="date"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="date"
                        label="Date Of Birth"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-flex>

                <!--<v-btn color="orange darken-2" type="submit" >Submit</v-btn>-->


            <v-dialog
            v-model="dialog"
            width="500"
            >
            <v-btn
                slot="activator"
                color="orange darken-2"
                dark
                type="submit"
            >
                Submit
            </v-btn>

            <v-card>
                <v-card-title
                class="headline grey lighten-2"
                primary-title
                >
                Form inputs:
                </v-card-title>

                <v-card-text>
                Name: {{ this.name }}
                </v-card-text>

                <v-card-text>
                B-Day: {{ this.date }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    flat
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>


            </v-form>

        </v-card>
      </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  }),
  methods: {
    submit() {}
    /*submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          date: this.date
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }*/
  }
};
</script>

