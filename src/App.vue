<template>
  <div>
  <router-view>
  </router-view>
  <footer>
{{ carStore.carLength}}
<RouterLink :to="{ name: 'home'}"><button>1</button></RouterLink>
<RouterLink :to="{ name: 'page2'}"><button>2</button></RouterLink>
<RouterLink :to="{ name: 'page3'}"><button>3</button></RouterLink>
  </footer>
</div>



</template>

<script setup>




import { useCart } from "./store/car"
const carStore = useCart()
</script>




