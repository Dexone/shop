
import { createRouter, createWebHistory } from "vue-router"
import Product from "../components/Product.vue"
import Home from "../components/Home.vue"
import Filter from "../components/Filter.vue"
import Basket from "../components/Basket.vue"

const routes = [
    {
        path: "/", component: Home, name: "home"
    },
    {
        path: "/product/:id", component: Product, name: "product"
    },
    {
        path: "/filter", component: Filter, name: "filter"
    },
    {
        path: "/basket", component: Basket, name: "basket"
    }
]
export default createRouter(
    {
        history: createWebHistory(), routes
    })


