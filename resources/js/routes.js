import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

// Definição das rotas
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

// Criação do roteador
const router = createRouter({
    history: createWebHistory(), // Usando o histórico da web para as rotas
    routes // Passando as rotas
});

export default router;
