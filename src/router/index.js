import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Coin from '@/views/Coin.vue'
import PageNotFound from '@/views/PageNotFound'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: "/home", name: 'Home', component: Home},
    {path: "/:id", name: 'page', component: Coin, props: true},
    {path: "/:catchAll(.*)*", name: 'PageNotFound', component: PageNotFound}
  ],
})

export default router;
