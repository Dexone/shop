<template>
  <div>
  <router-view>
  </router-view>
  <footer>
{{ carStore.carLength}}
  </footer>
</div>



</template>

<script setup>




import { useCart } from "./store/car"
const carStore = useCart()
</script>




