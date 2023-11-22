<template>
    <div v-for="main, index in mainInfo"
        style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;  padding-top: 10px;">
        <img style="width: 210px; height: 150px; float: left; border-radius: 1.5ch; padding-right: 10px;" :src=main.image>
        <b style="font-size: 18px;">
            <RouterLink style="color: black; padding-right: 10px;" :to="{ name: 'product' }"
                @click="productInfo.length = 0, productInfo.push(main)">{{
                    main.brand }} {{ main.model }}</RouterLink>
        </b>
        <b style="font-size: 18px;"> {{ main.price }} ₽</b>
        <span style="padding: 10px;">{{ main.year }}</span>
        {{ main.probeg }}
        <br>
        <span style="padding-right: 30px;">{{ main.engine }}/{{
            main.power }}</span> {{ main.color }}
        <br>
        <span style="padding-right: 70px;">{{ main.transmission }}</span> Владельцев: {{ main.owners }}
        <br>
        {{ main.kuzov }}
        <br>
        <button
            style="width: 150px; height: 30px; background-color: #36b555; border: 0; color: white; border-radius: 5px; font-size: 18px; margin-top: 10px;"
            @click="recycleInfo.push(main), summInfo = +summInfo + +main.price">Купить</button>
        <p>
        <div style="background-color: #e5e5e5; height: 1px; max-width: 3000px; margin-top: 50px;">
        </div>
        </p>
    </div>
</template>

<script setup>
import { inject } from "vue"

const recycleInfo = inject("recycleInfo")
const summInfo = inject("summInfo")
const productInfo = inject("productInfo")
const mainInfo = inject("mainInfo")














</script>