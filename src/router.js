import Vue from 'vue'
import Router from 'vue-router'
import Menu from "./components/menu/menu.vue"
import Grad from "./components/grad/grad.vue"
import Vertical from "./components/vertical/vertical.vue"
import Linear from "./components/linear/linear.vue"
import Table from "./components/table/table.vue"
import Table1 from "./components/table/table1.vue"
import Table2 from "./components/table/table2.vue"
import Table3 from "./components/table/table3.vue"
import Table4 from "./components/table/table4.vue"
import Responsive from "./components/Responsive/Responsive.vue"
import Layout from "./views/layout/Layout.vue"
import App from "./views/layout/App.vue"
import Push from "./views/layout/Push.vue"
import Dev from "./views/layout/Dev.vue"
import Manage from "./views/layout/Manage.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/menu",
      name: "menu",
      component: Menu
    },
    {
      path: "/grad",
      name: "grad",
      component: Grad
    },
    {
      path: "/vertical",
      name: "vertical",
      component: Vertical
    },
    {
      path: "/linear",
      name: "linear",
      component: Linear
    },
    {
      path: "/responsive",
      name: "Responsive",
      component: Responsive
    },
    {
      path: "/layout",
      name: "AppLayout",
      component: Layout,
      children: [
        {
          path: "app",
          component: App
        },
        {
          path: "push",
          component: Push
        },
        {
          path: "manage",
          component: Manage
        },
        {
          path: "dev",
          component: Dev
        }
      ]
    },
    {
      path: "/table",
      name: "Table",
      component: Table
    },
    {
      path: "/table1",
      name: "Table1",
      component: Table1
    },
    {
      path: "/table2",
      name: "Table2",
      component: Table2
    },
    {
      path: "/table3",
      name: "Table3",
      component: Table3
    },
    {
      path: "/table4",
      name: "Table4",
      component: Table4
    }
  ]
})
