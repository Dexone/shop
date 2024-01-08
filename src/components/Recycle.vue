<template>

    <div v-for="recycle, index in recycleInfo" class="recycleMain">

<div class="recycleNewCar">Новое авто</div>

<RouterLink class="recycleName" :to="{ name: 'product' }"
    @click="productInfo.length = 0, productInfo.push(main)">{{ recycle.model }} {{ recycle.year
    }}</RouterLink>

<div class="recycleInfo">
    {{ recycle.power }}л.с. / {{ recycle.engine }} / {{ recycle.transmission }} / {{ recycle.kuzov }} / {{ recycle.color }}</div>

<img class="recycleHomeImg" :src=recycle.image[1]>

<div class="recyclePrice"> {{ recycle.price }} ₽</div>

<div class="recycleKredit"> {{ Math.round(recycle.price / 84) }} ₽/мес</div>

<button class="recycleBuyButton" @click="recycleInfo.splice(index, 1), summInfo = +summInfo + +main.price">Удалить</button>
</div>
</template>

<script setup>
import { inject } from "vue"

const recycleInfo = inject("recycleInfo")

</script>