import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import StlpoveMotivyView from '../views/StlpoveMotivyView.vue';
import RetazeView from '@/views/RetazeView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/stlpove',
            name: 'stlpove',
            component: StlpoveMotivyView

        },
        {
            path: '/retaze',
            name: 'LED retaze',
            component: RetazeView
        }
    ]
})

export default router