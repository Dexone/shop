
import { createRouter, createWebHistory } from "vue-router"
import Product from "../components/Product.vue"
import Home from "../components/Home.vue"
import Page2 from "../components/Page2.vue"
import Page3 from "../components/Page3.vue"
const routes = [
    {
        path: "/", component: Home, name: "home"
    },
    {
        path: "/product/:id", component: Product, name: "product"
    },
    {
        path: "/Page2", component: Page2, name: "page2"
    },
    {
        path: "/Page3", component: Page3, name: "page3"
    }
]
export default createRouter(
    {
        history: createWebHistory(), routes
    })


