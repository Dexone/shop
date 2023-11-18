<template>
  <header style="background: linear-gradient(90deg, #162235, #233a54); width: 1920px; height: 50px; padding: 10px;">
    <a style="width: auto; height: 30px; margin-left: 500px;">
      <RouterLink style="color: white;" :to="{ name: 'home' }">Все автомобили </RouterLink>
    </a>

    <a style="width: auto; height: 30px;margin-left: 20px;">
      <RouterLink style="color: white;" :to="{ name: 'filters' }">Фильтры </RouterLink>
    </a>

    <a style="width: auto; height: 30px;margin-left: 20px;">
      <RouterLink style="color: white;" :to="{ name: '404' }">Услуги </RouterLink>
    </a>

    <a v-bind="summInfo" style="width: auto; height: 30px; margin-left: 510px;">
      <RouterLink style=" color: white;" :to="{ name: 'recycle' }">Корзина({{ summInfo }})</RouterLink>
    </a>
  </header>

  <div style="width: 900px; margin-left: auto; margin-right: auto;">
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
axios.get("http://62.109.22.57:3000/products").then((res) => {
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
})
</script>