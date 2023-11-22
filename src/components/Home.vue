<template>
    <div v-for="main, index in mainInfo" style="min-height: 170px;">
        <img style="width: 210px; height: 150px; float: left; border-radius: 1.5ch; padding-right: 10px;" :src=main.image>
        <b style="font-size: 18px;">
            <RouterLink style="color: black; padding-right: 10px;" :to="{ name: 'product' }"
                @click="productInfo.length = 0, productInfo.push(main)">{{
                    main.brand }} {{ main.model }}</RouterLink>
        </b>
        <span style="font-size: 18px;"> {{ main.price }} ₽</span>
        <span style="padding: 10px;">{{ main.year }}</span>
        {{ main.probeg }}
        <br>
        <span style="padding-right: 10px;">{{ main.engine }}/{{
            main.power }}</span> {{ main.color }}
        <br>
        <span style="padding-right: 40px;">{{ main.transmission }}</span> Владельцев: {{ main.owners }}
        <br>
        {{ main.kuzov }}
        <br>
        <button
            style="width: 150px; height: 30px; background-color: #36b555; border: 0; color: white; border-radius: 5px; font-size: 18px; margin: 10px;"
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