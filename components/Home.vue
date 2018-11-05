<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>        
        <div>
          <v-tabs            
            right
            v-model="active"
            color="black"
            dark
            slider-color="orange darken-2"
          >
            <v-tab
              v-for="n in 3"
              :key="n"
              ripple
            >
              Tab - {{ n }} 

            </v-tab>
            
            <v-tab-item
              v-for="content in contents"
              :key="content.id"
            >

              <v-card flat>
                <v-card-text><h1> {{ content.title }} </h1></v-card-text>

                <div v-if="content.id === 1">
                    <p class="text-sm-left">{{ content.content }}</p>                    
                </div>
                
                <div v-if="content.id === 2">
                    image content here                    
                </div>

                <div v-if="content.id === 3">
                    <app-forms></app-forms>                    
                </div>

              </v-card>
            </v-tab-item>

          </v-tabs>
        </div>      
      </v-flex>
    </v-layout>
  </v-container>
  
</template>

<script>
import Forms from "@/components/Forms.vue";

export default {
  components: {
    "app-forms": Forms
  },
  data() {
    return {
      active: null,
      contents: [
        {
          id: 1,
          title: "Lorem ipsum",
          content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33."
        },
        {
          id: 2,
          title: "Image"
        },
        {
          id: 3,
          title: "Form"
        }
      ]
    };
  }
};
</script>
