import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import StlpoveView from '../views/StlpoveMotivyView.vue';
import RetazeView from '../views/RetazeView.vue';
import Kontakty from '../components/Kontakty.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/stlpove',
            name: 'stlpove',
            component: StlpoveView

        },
        {
            path: '/retaze',
            name: 'LED retaze',
            component: RetazeView
        },
        {
            path: '/kontakty',
            name: 'Kontakty',
            component: Kontakty
        },
    ]
})

export default router