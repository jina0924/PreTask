import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HealthyListView from '@/views/HealthyListView.vue'
import SummerFruitListView from '@/views/SummerFruitListView.vue'
import PeacockListView from '@/views/PeacockListView.vue'
import FreshListView from '@/views/FreshListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/healthy',
    name: 'healthy',
    component: HealthyListView,
  },
  {
    path: '/summer-fruit',
    name: 'summerFruit',
    component: SummerFruitListView,
  },
  {
    path: '/peacock',
    name: 'peacock',
    component: PeacockListView,
  },
  {
    path: '/fresh',
    name: 'fresh',
    component: FreshListView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router