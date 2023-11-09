<template>
    <div v-if="productData" style="margin: 10px;">





        <table style="float: left; margin-right: 10px;">
            <h1>Основные характеристики</h1>
            <tr>
                <td>Владельцы:</td>
                <td>{{ productData[0].owners }}</td>
            </tr>
            <tr>
                <td>Год выпуска:</td>
                <td>{{ productData[0].year }}</td>
            </tr>
            <tr>
                <td>Пробег:</td>
                <td>{{ productData[0].probeg }}</td>
            </tr>
            <tr>
                <td>Двигатель:</td>
                <td> {{ productData[0].power }}л.с. / {{ productData[0].engine }}</td>
            </tr>
            <tr>
                <td>Кузов:</td>
                <td>{{ productData[0].kuzov }}</td>
            </tr>
            <tr>
                <td>Коробка:</td>
                <td>{{ productData[0].transmission }}</td>
            </tr>
            <tr>
                <td>Цвет:</td>
                <td>{{ productData[0].color }}</td>
            </tr>
        </table>
        <img style="width: 558px; height: 400px;" :src="productData[0].image">
        <button style="width: 150px; height: 50px; margin-left: 70px;" @click="basket.push(productData[0].id), counter++">Купить</button>

    </div>
</template>

<script setup>
import axios from "axios"
import { ref, inject, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useCart } from "../store/car"
const basket = inject("basket")
const product = inject("product")
const productData = ref()
function productUpdate() {
    let productString = "&id=" + product.value[0]
    axios.get(`http://localhost:3000/products?${productString}`).then((res) => {
        productData.value = [{
            id: res.data[0].id,
            brand: res.data[0].brand,
            model: res.data[0].model,
            owners: res.data[0].owners,
            year: res.data[0].year,
            probeg: res.data[0].probeg,
            power: res.data[0].power,
            kuzov: res.data[0].kuzov,
            transmission: res.data[0].transmission,
            engine: res.data[0].engine,
            color: res.data[0].color,
            price: res.data[0].price,
            image: res.data[0].image,
        }]
    }
    )
}
onMounted(productUpdate)
</script>
  