<template>
    <div v-for="main, index in mainInfo"
        style="width: 980px; height: 400px; display: inline-block; margin: 10px; border-radius: 1.5ch; border: 1px solid; border-color: #f8f8f8;">
        <img style="width: 340px; height: 190px; float: left; margin-right: 20px; border-radius: 1.5ch" :src=main.image>
        <div style="margin: 20px; color: #a0a09f;">
            <b style="font-size: 18px;">
                <RouterLink style="color: black;" :to="{ name: 'product' }"
                    @click="productInfo.length = 0, productInfo.push(main), console.log(productInfo)">{{
                        main.brand }} {{ main.model }}</RouterLink><br>
            </b>
            {{ main.model }}, {{ main.year }}г.в., {{ main.probeg }} км, {{ main.transmission }}, {{ main.engine }}, {{
                main.power }}л/с<br>
            <b style="font-size: 24px; color: black;"> {{ main.price }} ₽</b><br>
        </div>
        <button
            style="width: 230px; height: 40px; background-color: red; border: 0; color: white; border-radius: 10px; margin-left: 30px; font-size: 18px;"
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