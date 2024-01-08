<template>
    <div v-for="product in productInfo" style="margin: 10px;">

        <img :src="product.image[count]">
        <button @click="ffleft">Влево</button>
        <button @click="ffright">Вправо</button>
        <table class="productTable">
            <b>Основные характеристики</b>
            <tr>
                <td>Модель:</td>
                <td>{{ product.model }}</td>
            </tr>
            <tr>
                <td>Год выпуска:</td>
                <td>{{ product.year }}</td>
            </tr>
            <tr>
                <td>Мощность:</td>
                <td>{{ product.power }}</td>
            </tr>
            <tr>
                <td>Кузов:</td>
                <td>{{ product.kuzov }}</td>
            </tr>
            <tr>
                <td>Коробка:</td>
                <td>{{ product.transmission }}</td>
            </tr>
            <tr>
                <td>Двигатель:</td>
                <td>{{ product.engine }}</td>
            </tr>
            <tr>
                <td>Цвет:</td>
                <td>{{ product.color }}</td>
            </tr>
            <tr>
                <td>Цена:</td>
                <td>{{ product.price }}</td>
            </tr>
        </table>

    </div>
</template>

<script setup>
import { inject, ref } from "vue"

let count = ref(1)
function ffleft(){
    count.value--
   console.log(count.value)
    if (count.value === 0)
    count.value = 1
}

function ffright(){
   count.value++
   console.log(count.value)
    if (count.value === 6)
    count.value = 5
}

const recycleInfo = inject("recycleInfo") //добавление в корзину
const productInfo = inject("productInfo")
const summInfo = inject("summInfo")
</script>