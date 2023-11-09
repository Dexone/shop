<template>
    <div v-for="main in mainInfo"
        style="background-color: ghostwhite; width: 280px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=main.image>
        <RouterLink :to="{ name: 'product' }" @click="product.length=0, product.push(main.id), console.log(product)">{{ main.brand }}{{ main.model }}</RouterLink><br>
        {{ main.model }}, {{ main.year }}г.в., {{ main.probeg }} км, {{ main.transmission }}, {{ main.engine }}, {{
            main.power }}л/с<br>
        {{ main.price }}₽<br>
        <button @click="basket.push(main.id)">Купить</button>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, watch } from "vue"
const mainInfo = inject("mainInfo")
console.log(mainInfo)
</script>