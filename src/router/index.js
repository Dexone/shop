
import { createRouter, createWebHistory } from "vue-router"
import Product from "../components/Product.vue"
import Home from "../components/Home.vue"
import Recycle from "../components/Recycle.vue"
import Filters from "../components/Filters.vue"

const routes = [
    {
        path: "/", component: Home, name: "home"
    },
    {
        path: "/product/", component: Product, name: "product"
    },
    {
        path: "/recycle", component: Recycle, name: "recycle"
    },
    {
        path: "/filters", component: Filters, name: "filters"
    }
]
export default createRouter(
    {
        history: createWebHistory(), routes
    })


