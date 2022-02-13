import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Coin from '@/views/Coin.vue'
import PageNotFound from '@/views/PageNotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", name: 'Home', component: Home},
    {path: "/:id", name: 'page', component: Coin, props: true},
    {path: "/:catchAll(.*)*", name: 'PageNotFound', component: PageNotFound}
  ],
})

export default router;
