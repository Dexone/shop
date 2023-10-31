<template>
  <div>User {{ $route.params.id }}</div>
</template>



<script setup>
import axios from "axios"
import {ref} from "vue"
axios.get("http://localhost:3000/products").then((res)=>{
  console.log(res.data)
}
)



const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})



</script>
