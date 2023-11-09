<template>
  <div
    style="background-color: #efefef; border-radius: 10px; color: #6c6a6a; width: 900px; margin-left: auto; margin-right: auto;">
    <div id="data">
      <div
        style="width: 360px; background-color: white; border-radius: 10px; height:60px; float: left; padding: 7px; margin: 7px;">
        <div v-for="brand, index in brands" style="display: inline-block;">
          <div @click="filter.push(brand)">&nbsp;{{ brand }}</div>
        </div>
      </div>
    <div
      style="width: 270px; background-color: white; border-radius: 10px; height:60px; float: left; padding: 7px; margin: 7px;">
      <input type="checkbox" value="Седан" v-model="filterKuzov">
      <label> Седан </label>
      <input type="checkbox" value="Хэтчбек" v-model="filterKuzov">
      <label> Хэтчбек </label>
      <input type="checkbox" value="Универсал" v-model="filterKuzov">
      <label> Универсал </label>
      <input type="checkbox" value="Внедорожник" v-model="filterKuzov">
      <label> Внедорожник </label>
    </div>
    <div
      style="width: 220px; background-color: white; border-radius: 10px; height:60px; display: inline-block; padding: 7px; margin: 7px;">
      <input type="checkbox" value="АКПП" v-model="filterTransmission">
      <label> АКПП </label>
      <input type="checkbox" value="МКПП" v-model="filterTransmission">
      <label> МКПП </label>
      <input type="checkbox" value="Робот" v-model="filterTransmission">
      <label> Робот </label>
      <input type="checkbox" value="Вариатор" v-model="filterTransmission">
      <label> Вариатор </label>
    </div>
  </div>


    <div id="filters" style="width: 900px; height: 30px;">
      <div v-for="fil, index in filter" style="float: left;">
        <button style="width: auto; height: 30px; color: red;" @click="filter.splice(index, 1)" class="button">{{ fil }}
          ✖</button>
      </div>
      <div v-for="filKuzov, index in filterKuzov" style="float: left;">
        <button style="width: auto; height: 30px; color: red;" @click="filterKuzov.splice(index, 1)" class="button">{{
          filKuzov }}
          ✖</button>
      </div>
      <div v-for="filTransmission, index in filterTransmission" style="float: left;">
        <button style="width: auto; height: 30px; color: red;" @click="filterTransmission.splice(index, 1)"
          class="button">{{ filTransmission }}
          ✖</button>
      </div>
    </div>


    <div if="buttons">
      <button style="width: auto; height: 30px;border: 0; border-radius: 5px; margin-right: 5px; margin-top: 5px;"
        @click="filter.length = 0, filterKuzov.length = 0, filterTransmission.length = 0">
        <RouterLink :to="{ name: 'home' }">Сбросить ✖</RouterLink>
      </button>
      <button style="width: auto; height: 30px; background-color: white; border: 0; border-radius: 5px;">
        <RouterLink :to="{ name: 'filter' }" @click="counter++">Показать ({{
          filter.length + filterKuzov.length + filterTransmission.length }}) </RouterLink>
      </button>

      <button style="width: auto; height: 30px; background-color: white; border: 0; border-radius: 5px; float: right;">
    <RouterLink :to="{ name: 'basket' }" @click="counter++">Корзина ({{
      basket.length }}) </RouterLink>
  </button>
    </div>


  </div>



  <div style="width: 900px; margin-left: auto; margin-right: auto;">
    <router-view>
    </router-view>
  </div>
</template>

<script setup>
import { useCart } from "./store/car"
import { provide, ref } from 'vue'


const product = ref([]) //id выбранного авто при нажатии на название в product
provide("product", product)

const basket = ref([]) //список id в корзину
provide("basket", basket)

const homeInfo = ref([]) //массив axios из home для brands \/
provide("homeInfo", homeInfo)

let brands = ref() //строка марок для шапки из homeInfo
function pre() {
  let BrandList = []
  let i = 0
  while (i < homeInfo.value.length) {
    BrandList.push(homeInfo.value[i].brand)
    i++
  }
  const uniqueArr = [...new Set(BrandList)];
  brands.value = uniqueArr
}
setTimeout(pre, 100)

const filter = ref([]) //список выбранных марок для фильтра
provide("filter", filter)
const filterKuzov = ref([]) //список выбранных кузовов для фильтра
provide("filterKuzov", filterKuzov)
const filterTransmission = ref([]) //список выбранных кпп для фитльтра
provide("filterTransmission", filterTransmission)


const counter = ref(1) //счетчик для отслеживания выполнения функции
provide("counter", counter)

</script>




