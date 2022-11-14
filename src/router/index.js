import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearComponent from '../components/CrearComponent.vue'
import EditarComponent from '../components/EditarComponent.vue'
import ListarComponent from '../components/ListarComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crear',
    component: CrearComponent
  },
  {
    path: '/editar',
    name: 'editar',
    component: EditarComponent
  },
  {
    path: '/listar',
    name: 'Listar',
    component: ListarComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
