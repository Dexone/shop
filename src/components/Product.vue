<template>
    <div v-if="tempData"
        style="background-color: ghostwhite; width: 300px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 300px; height: 200px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src="tempData[0].image">
        {{ tempData }}
    </div>
    <button @click="buyCar(tempData.id)">Купить</button>
</template>
  
  
  
<script setup>
import axios from "axios"
import { ref } from "vue"
import { useRoute } from "vue-router"
import { useCart } from "../store/car"

const carStore = useCart()

function buyCar(id) {
    carStore.addProduct(id)
}

const router = useRoute()
const cardsInfo = ref([])
const tempData = ref(null)
axios.get(`http://localhost:3000/products?brand=${router.params.id}`).then((res) => {
    tempData.value = [{
        id: res.data.id,
        brand: res.data.brand,
        model: res.data.model,
        owners: res.data.owners,
        year: res.data.year,
        probeg: res.data.probeg,
        power: res.data.power,
        kuzov: res.data.kuzov,
        transmission: res.data.transmission,
        engine: res.data.engine,
        color: res.data.color,
        price: res.data.price,
        image: res.data.image,
    }]
    console.log(tempData)
}
)
</script>
  