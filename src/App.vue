<template>
  <div v-for="card in cardsInfo"
    style="background-color: ghostwhite; width: 300px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
    <img style="width: 300px; height: 200px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=card.image>
    {{ card.brand }}{{ card.model }}<br>
    {{ card.price }}
  </div>
</template>



<script setup>
import axios from "axios"
import { ref } from "vue"



const cardsInfo = ref([])
axios.get("http://localhost:3000/products").then((res) => {
  console.log(res.data)
  const tempData = res.data.map((item, index) => {
    return {
      id: res.data[index].id,
      brand: res.data[index].brand,
      model: res.data[index].model,
      owners: res.data[index].owners,
      year: res.data[index].year,
      probeg: res.data[index].probeg,
      transmission: res.data[index].transmission,
      color: res.data[index].color,
      price: res.data[index].price,
      image: res.data[index].image,
    }
  })
  cardsInfo.value = tempData
  console.log(tempData)
}
)
</script>
