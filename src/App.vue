<template>
  <div style="background-color: gainsboro; padding: 10px; border-radius: 10px;">

    <div style="width: 520px; background-color: white; padding: 10px; border-radius: 10px; display: inline-block;">
      <div v-for="card, index in brands" style="display: inline-block;">
        <div @click="filter.push(card)">&nbsp;{{ card }}</div>
      </div>
    </div>

    <div
      style="width: 520px; background-color: white; padding: 10px; border-radius: 10px; height: 50px; display: inline-block;">
      <input type="checkbox" value="АКПП"  v-model="filterKuzov" >
      <label>АКПП</label>
      <input type="checkbox" value="МКПП" v-model="filterKuzov">
      <label>МКПП</label>
      <input type="checkbox" value="Робот" v-model="filterKuzov">
      <label>Робот</label>
      <input type="checkbox" value="Вариатор" v-model="filterKuzov">
      <label>Вариатор</label>
    </div>

    <div v-for="filKuzov, index in filterKuzov">

    </div>

    <div v-for="fil, index in filter" style="display: inline-block;">
      <button style="width: auto; height: 30px; color: red;" @click="filter.splice(index, 1)" class="button">{{ fil }}
        ✖</button>
    </div>

    <div>
      <button style="width: auto; height: 30px;border: 0; border-radius: 5px; margin-right: 5px; margin-top: 5px;"
        @click="filter.length = 0, filterKuzov.length = 0">
        <RouterLink :to="{ name: 'home' }">Сбросить ✖</RouterLink>
      </button>
      <button style="width: auto; height: 30px; background-color: white; border: 0; border-radius: 5px;">
        <RouterLink :to="{ name: 'filter' }" @click="counter++">Показать ({{
          filter.length }}) </RouterLink>
      </button>
    </div>
  </div>

  <button @click="console.log(filterKuzov)">test</button>
  <div>
    <router-view>
    </router-view>
    <footer>
      {{ carStore.carLength }}

    </footer>
  </div>

</template>

<script setup>
import { useCart } from "./store/car"
import { provide, ref } from 'vue'

const cardsInfo = ref([]) //общий список авто
provide("cardsInfo", cardsInfo)

let brands = ref()
function pre() {
  let BrandList = []
  let i = 0
  while (i < cardsInfo.value.length) {
    BrandList.push(cardsInfo.value[i].brand)
    i++
  }
  const uniqueArr = [...new Set(BrandList)];
  brands.value = uniqueArr
}
setTimeout(pre, 100)

const filter = ref([]) //список выбранных марок
provide("filter", filter)

const filterKuzov = ref([]) //список выбранных кузовов
provide("filterKuzov", filterKuzov)

const counter = ref(1) //watch
provide("counter", counter)

const carStore = useCart()
</script>




