<template>
  <div style="background-color: gainsboro; padding: 10px; border-radius: 10px;">

    <div style=" background-color: white; padding: 10px; border-radius: 10px;">
      <div v-for="card, index in cardsInfo"
        style="display: inline-block;">
        <div @click="filter.push(card.brand)">&nbsp;{{ card.brand }}</div>
      </div>
    </div>

    <div v-for="fil, index in filter" style="display: inline-block;">
      <button style="width: auto; height: 30px; color: red;" @click="filter.splice(index, 1)" class="button">{{ fil }}
        ✖</button>

    </div>


    <div>
      <RouterLink :to="{ name: 'home' }">Сбросить</RouterLink>
      <RouterLink :to="{ name: 'filter' }" @click="counter++">Поиск</RouterLink>
    </div>

  </div>

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

const filter = ref([]) //список выбранных авто
provide("filter", filter)

const counter = ref(1) //watch
provide("counter", counter)

const carStore = useCart()


</script>




