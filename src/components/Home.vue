<template>
    <div v-for="main, index in mainInfo"
        style="background-color: ghostwhite; width: 280px; height: 320px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=main.image>
        <RouterLink :to="{ name: 'product' }"
            @click="productInfo.length = 0, productInfo.push(main), console.log(productInfo)">{{
                main.brand }}{{ main.model }}</RouterLink><br>
        {{ main.model }}, {{ main.year }}г.в., {{ main.probeg }} км, {{ main.transmission }}, {{ main.engine }}, {{
            main.power }}л/с<br>
        {{ main.price }}₽<br>
        <button style ="width: 90px; height: 30px; background-color: red; border: 0; color: white; border-radius: 5px; margin-left: 80px" @click="recycleInfo.push(main)">Купить</button>
    </div>
</template>

<script setup>
import { inject } from "vue"

const recycleInfo = inject("recycleInfo")
const productInfo = inject("productInfo")
const mainInfo = inject("mainInfo")




</script>