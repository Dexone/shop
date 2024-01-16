<script setup>
definePageMeta({
  layout: 'store',
})

const mainInfo = ref(0)

const { data } = await useFetch("http://localhost:3000/products")
// console.log(res.data.value)

const mainData = data.value.map((item, index) => {

  return {
    id: data.value[index].id,
    model: data.value[index].model,
    year: data.value[index].year,
    power: data.value[index].power,
    kuzov: data.value[index].kuzov,
    transmission: data.value[index].transmission,
    engine: data.value[index].engine,
    color: data.value[index].color,
    price: data.value[index].price,
    image: {
      1: data.value[index].image1,
      2: data.value[index].image2,
      3: data.value[index].image3,
      4: data.value[index].image4,
      5: data.value[index].image5
    }
  }
})
mainInfo.value = mainData
</script>

<template>
    <div v-for="main, index in mainInfo" class="main">

<div class="newCar">Новое авто</div>

{{ main.model }} {{ main.year
    }}

<div class="info">
    {{ main.power }}л.с. / {{ main.engine }} / {{ main.transmission }} / {{ main.kuzov }} / {{ main.color }}</div>

<img class="homeImg" :src=main.image[1]>

<div class="price"> {{ main.price }} ₽</div>

<div class="kredit"> {{ Math.round(main.price / 84) }} ₽/мес</div>

<button class="buyButton" @click="recycleInfo.push(main), summInfo = +summInfo + +main.price">Купить</button>
</div>



  {{ mainInfo }}
  <StoreHero />
  <StoreCollection />
  <StoreTechnicalSpecs />
</template>
