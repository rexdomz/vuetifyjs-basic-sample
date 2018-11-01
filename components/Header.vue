<template>
  <div id="app">
      <v-toolbar color="orange darken-2" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Frontend Stuff</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link to="/">
          <v-btn flat>Home</v-btn>
        </router-link>
        <router-link to="/About">
          <v-btn flat>About</v-btn>      
        </router-link>
        <router-link to="/login">
          <v-btn flat>Login</v-btn>
        </router-link>
      </div>
    </v-toolbar>
    <router-view/>
  </div>
</template>