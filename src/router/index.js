
import { createRouter, createWebHistory } from "vue-router"
import Product from "../components/Product.vue"
import Home from "../components/Home.vue"
import Recycle from "../components/Recycle.vue"
import Filters from "../components/Filters.vue"
import Uslugi from "../components/Uslugi.vue"


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
    },
    {
        path: "/404", component: Uslugi, name: "404"
    }
]
export default createRouter(
    {
        history: createWebHistory(), routes
    })


