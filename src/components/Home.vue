<template>
    <div v-for="main, index in mainInfo" class="main">

        <div class="newCar">Новое авто</div>

        <RouterLink class="name" :to="{ name: 'product' }"
            @click="productInfo.length = 0, productInfo.push(main), console.log(productInfo)">{{ main.model }} {{ main.year
            }}</RouterLink>

        <div class="info">
            {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} / {{ main.kuzov }} / {{ main.color }}</div>

        <img class="homeImg" :src=main.image[1]>

        <div class="price"> {{ main.price }} ₽</div>

        <div class="kredit"> {{ Math.round(main.price / 84) }} ₽/мес</div>

        <button class="buyButton" @click="recycleInfo.push(main), summInfo = +summInfo + +main.price">Купить</button>
    </div>
</template>

<script setup>
import { inject } from "vue"

const recycleInfo = inject("recycleInfo")
const summInfo = inject("summInfo")
const productInfo = inject("productInfo")
const mainInfo = inject("mainInfo")
</script>