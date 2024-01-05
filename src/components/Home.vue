<template>
    <div v-for="main, index in mainInfo"
        style="width: 300px; display: inline-block;margin-right: 30px; margin-top: 30px; border-radius: 1.5ch; border: 1px solid; border-color: #cdd0d2; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">

        <RouterLink style="color: black; font-size: 20px;margin: 10px;" :to="{ name: 'product' }"
            @click="productInfo.length = 0, productInfo.push(main), console.log(productInfo)"><b>{{
                main.brand }} {{ main.model }}</b></RouterLink><br>

        <div style=" color: #a0a09f; padding: 10px;">
            {{ main.model }}, {{ main.year }}г.в., {{ main.probeg }} км, {{ main.transmission }}, {{ main.engine }}, {{
                main.power }}л/с</div>

        <img style="width: 300px; height: 190px; border-radius: 1.5ch" :src=main.image>






        <div style="padding: 10px;font-size: 26px; color: black;"><b> {{ main.price }} ₽</b></div>


        <button
            style="width: 230px; height: 40px; background-color: #05141f; color: white; margin: 10px 30px 10px 30px; font-size: 12px;"
            @click="recycleInfo.push(main), summInfo = +summInfo + +main.price">Купить</button>
    </div>
</template>

<script setup>
import { inject } from "vue"

const recycleInfo = inject("recycleInfo")
const summInfo = inject("summInfo")
const productInfo = inject("productInfo")
const mainInfo = inject("mainInfo")
</script>