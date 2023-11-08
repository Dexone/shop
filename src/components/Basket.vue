<template>
    <div v-for="card in filterInfo"
        style="background-color: ghostwhite; width: 450px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 450px; height: 300px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=card.image>
        <RouterLink :to="{ name: 'product', params: { id: card.id } }">{{ card.brand }}{{ card.model }}</RouterLink><br>
        {{ card.model }}, {{ card.year }}г.в., {{ card.probeg }} км, {{ card.transmission }}, {{ card.engine }},
        {{ card.power }}л/с<br>
        {{ card.price }}₽
    </div>
</template>

<script setup>
import axios from "axios"
import { ref, watch, onMounted, inject } from "vue"

const counter = inject("counter")
const filterInfo = ref([])
const basket = inject("basket") // массив ID корзины
let basketList = []
function drawCards() {
    basketList.length = 0
    let i = 0
    while (i < basket.value.length) {
        basketList.push("&id=" + basket.value[i])
        i++
    }
    let bask = basketList.join('')

    axios.get(`http://localhost:3000/products?${bask}`).then((res) => {
        const tempData = res.data.map((item, index) => {
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
        filterInfo.value = tempData
    })
}
onMounted(drawCards)
watch(counter, () => {
    drawCards()
})
</script>