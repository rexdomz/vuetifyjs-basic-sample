import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
//import Login from "@/views/Login";
//import About from "@/views/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
    /*{
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/about",
      name: "About",
      component: About
    }*/
  ]
});
