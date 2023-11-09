<template>
    <div v-for="card in filterInfo"
        style="background-color: ghostwhite;  width: 280px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=card.image>
        <RouterLink :to="{ name: 'product' }">{{ card.brand }}{{ card.model }} </RouterLink><br>
        {{ card.model }}, {{ card.year }}г.в., {{ card.probeg }} км, {{ card.transmission }}, {{ card.engine }},
        {{ card.power }}л/с<br>
        {{ card.price }}₽
        <button @click="basket.push(card.id), counter++">Купить</button>
    </div>
</template>

<script setup>
import axios from "axios"
import { ref, watch, onMounted, inject } from "vue"

const basket = inject("basket")
const filter = inject("filter") // массив выбранных марок
let favourite = [] //строка поиска выбранных авто
const filterKuzov = inject("filterKuzov") //массив выбранных кузовов
let favouriteKuzov = [] //строка поиска выбранных кузовов
const filterTransmission = inject("filterTransmission") //массив выбранных трансмиссий
let favouriteTransmission = [] //строка поиска выбранных трансмиссий
const filterInfo = ref([]) // отрисовка карточек в фильтре
const counter = inject("counter")
function drawCards() {
    favourite.length = 0
    let i = 0
    while (i < filter.value.length) {
        favourite.push("&brand=" + filter.value[i])
        i++
    }
    let fav = favourite.join('')
    favouriteKuzov.length = 0
    let a = 0
    while (a < filterKuzov.value.length) {
        favouriteKuzov.push("&kuzov=" + filterKuzov.value[a])
        a++
    }
    let favKuzov = favouriteKuzov.join('')
    favouriteTransmission.length = 0
    let b = 0
    while (b < filterTransmission.value.length) {
        favouriteTransmission.push("&transmission=" + filterTransmission.value[b])
        b++
    }
    let favTransmission = favouriteTransmission.join('')
    axios.get(`http://localhost:3000/products?${fav}${favKuzov}${favTransmission}`).then((res) => {
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