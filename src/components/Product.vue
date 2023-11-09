<template>
    <div v-if="productData"
        style="background-color: ghostwhite; width: 300px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 300px; height: 200px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src="productData[0].image">
        {{ productData[0] }}
    </div>
</template>

<script setup>
import axios from "axios"
import { ref, inject, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useCart } from "../store/car"

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
  