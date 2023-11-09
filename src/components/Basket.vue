<template>
    <div v-for="bask in basketInfo"
        style="background-color: ghostwhite; width: 280px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=bask.image>
        <RouterLink :to="{ name: 'product' }">{{ bask.brand }}{{ bask.model }} </RouterLink><br>
        {{ bask.model }}, {{ bask.year }}г.в., {{ bask.probeg }} км, {{ bask.transmission }}, {{ bask.engine }},
        {{ bask.power }}л/с<br>
        {{ bask.price }}₽
    </div>
</template>

<script setup>
import axios from "axios"
import { ref, watch, onMounted, inject } from "vue"

const basketInfo = ref([]) //v-for
const basket = inject("basket") // массив ID корзины
let basketList = [] //массив &id=
function drawCards() {
    basketList.length = 0
    let i = 0
    while (i < basket.value.length) {
        basketList.push("&id=" + basket.value[i])
        i++
    }
    let bask = basketList.join('')

    axios.get(`http://localhost:3000/products?${bask}`).then((res) => {
        const basketData = res.data.map((item, index) => {
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
        basketInfo.value = basketData
    })
}
onMounted(drawCards)

</script>