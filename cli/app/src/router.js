import Vue from 'vue'
import Router from "vue-router"
import List from "./components/List.vue"
import Sample from "./components/Sample.vue"

Vue.use(Router) 

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'list',
      component: List 
    },
    { path: '/sample',
      name: 'sample',
      component: Sample
     }
  ]
});

