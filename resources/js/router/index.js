import { createRouter, createWebHistory } from 'vue-router'

import InvoiceIndex from '../components/invoices/index.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: InvoiceIndex
    },
    {
        path: '/:pathmatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
