<template>
  <header>
    <div class="routerLinks">
      <RouterLink :to="{ name: 'home' }">Все автомобили &nbsp;</RouterLink>
      <RouterLink :to="{ name: 'filters' }"> Фильтры &nbsp;</RouterLink>
      <RouterLink :to="{ name: 'recycle' }"> Корзина({{ recycleInfo.length }})</RouterLink>
      <img src="./image/logo.png" align="right">
    </div>
  </header>

  <div class="routerViews">
    <router-view>
    </router-view>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import axios from 'axios'

const productInfo = ref([]) //product
provide("productInfo", productInfo)

const recycleInfo = ref([])   //корзина
provide("recycleInfo", recycleInfo)

const summInfo = ref(0)   //сумма товаров
provide("summInfo", summInfo)







const mainInfo = ref()
provide("mainInfo", mainInfo)
axios.get("http://localhost:3000/products").then((res) => {
  const mainData = res.data.map((item, index) => {
    return {
      id: res.data[index].id,
      model: res.data[index].model,
      year: res.data[index].year,
      power: res.data[index].power,
      kuzov: res.data[index].kuzov,
      transmission: res.data[index].transmission,
      engine: res.data[index].engine,
      color: res.data[index].color,
      price: res.data[index].price,
      image: {
        1: res.data[index].image1,
        2: res.data[index].image2,
        3: res.data[index].image3,
        4: res.data[index].image4,
        5: res.data[index].image5
      }
    }
  })
  mainInfo.value = mainData
})
</script>