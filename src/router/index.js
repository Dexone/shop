
import { createRouter, createWebHistory } from "vue-router"
import Product from "../components/Product.vue"
import Home from "../components/Home.vue"
const routes = [
    {
        path: "/", component: Home, name: "home"
    },
    {
        path: "/product/:id", component: Product, name: "product"
    }
]
export default createRouter(
    {
        history: createWebHistory(), routes
    })



    