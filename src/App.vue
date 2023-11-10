<template>
  <button style="width: auto; height: 30px; background-color: white; border: 0; border-radius: 5px; float: right;">
    <RouterLink :to="{ name: 'recycle' }">Корзина </RouterLink>
  </button>

  <button style="width: auto; height: 30px; background-color: white; border: 0; border-radius: 5px; float: right;">
    <RouterLink :to="{ name: 'filters' }">Фильтры </RouterLink>
  </button>

  <div style="width: 900px; margin-left: auto; margin-right: auto;">
    <router-view>
    </router-view>
  </div>
</template>

<script setup>
import { useCart } from "./store/car"
import { provide, ref } from 'vue'
import axios from 'axios'


const productInfo = ref([]) //product
provide("productInfo", productInfo)

const recycleInfo = ref([])   //корзина
provide("recycleInfo", recycleInfo)



const mainInfo = ref()
provide("mainInfo", mainInfo)
axios.get("http://localhost:3000/products").then((res) => {
  const mainData = res.data.map((item, index) => {
    return {
      id: res.data[index].id,
      brand: res.data[index].brand,
      model: res.data[index].model,
      owners: res.data[index].owners,
      year: res.data[index].year,
      probeg: res.data[index].probeg,
      power: res.data[index].power,
      kuzov: res.data[index].kuzov,
      transmission: res.data[index].transmission,
      engine: res.data[index].engine,
      color: res.data[index].color,
      price: res.data[index].price,
      image: res.data[index].image,
    }

  })
  mainInfo.value = mainData
}

)
</script>




