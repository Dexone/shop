<template>
    <div v-for="product in productInfo" style="margin: 10px;">
        <table style="float: left; margin-right: 10px;">
            <b>Основные характеристики</b>
            <tr>
                <td>Владельцы:</td>
                <td>{{ product.owners }}</td>
            </tr>
            <tr>
                <td>Год выпуска:</td>
                <td>{{ product.year }}</td>
            </tr>
            <tr>
                <td>Пробег:</td>
                <td>{{ product.probeg }}</td>
            </tr>
            <tr>
                <td>Двигатель:</td>
                <td> {{ product.power }}л.с. / {{ product.engine }}</td>
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
                <td>Цвет:</td>
                <td>{{ product.color }}</td>
            </tr>
        </table>
        <img style="width: 545px; height: 400px;" :src="product.image">
        <button
            style="width: 90px; height: 30px; background-color: red; border: 0; color: white; border-radius: 5px; margin-left: 80px"
            @click="recycleInfo.push(product)">Купить</button>
    </div>
</template>

<script setup>
import { inject } from "vue"

const recycleInfo = inject("recycleInfo") //добавление в корзину
const productInfo = inject("productInfo")
</script>