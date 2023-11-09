<template>
    <div v-for="home in homeInfo"
        style="background-color: ghostwhite; width: 280px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=home.image>
        <RouterLink :to="{ name: 'product' }" @click="product.length=0, product.push(home.id), console.log(product)">{{ home.brand }}{{ home.model }}</RouterLink><br>
        {{ home.model }}, {{ home.year }}г.в., {{ home.probeg }} км, {{ home.transmission }}, {{ home.engine }}, {{
            home.power }}л/с<br>
        {{ home.price }}₽<br>
        <button @click="basket.push(home.id)">Купить</button>
    </div>
</template>



<script setup>
import axios from "axios"
import { ref, provide, inject } from "vue"
const homeInfo = inject("homeInfo")


const basket = inject("basket")
const product = inject("product")
axios.get("http://localhost:3000/products").then((res) => {
    const homeData = res.data.map((item, index) => {
        return {
            id: res.data[index].id,
            brand: res.data[index].brand,
            model: res.data[index].model,
            owners: res.data[index].owners,
            year: res.data[index].year,
            probeg: res.data[index].probeg,
            power: res.data[index].power,
            kuzov: res.data[index].kuzov,
            transmission: res.data[index].transmission,
            engine: res.data[index].engine,
            color: res.data[index].color,
            price: res.data[index].price,
            image: res.data[index].image,
        }

    })
    homeInfo.value = homeData
}

)



</script>