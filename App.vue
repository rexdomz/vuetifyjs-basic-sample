<template>
    <div>
        <app-header></app-header>
        <app-main-content></app-main-content>        
        <app-footer></app-footer>
    </div>
</template>

<script>
// Imports
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "app-header": Header,
    //"app-header": Content,
    "app-footer": Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
