<template>
    <input v-model="image">
    <input v-model="price">
    <input v-model="category">
    <input v-model="discount">
    <input v-model="title">
    <input v-model="rating">
    <button @click="addProduct">Добавить</button>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const image = ref()
const price = ref()
const category = ref()
const discount = ref()
const title = ref()
const rating = ref()

async function addProduct() {
    const res = await axios.post("/product/api/create", {
        "img": image.value,
        "price": Number(price.value),
        "category": category.value,
        "discount": !!(discount.value),
        "title": title.value,
        "rating": rating.value
    }, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2OTk5NDI4ODcsImV4cCI6MTcwMDU5MDg4N30.SlY382hkRJW3YLZWbm9WEFJ38twN9Y_rP5UcabWAowE" } })
    console.log(res)
}

</script>