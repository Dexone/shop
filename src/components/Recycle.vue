<template>
    <div v-for="recycle in recycleInfo"
        style="background-color: ghostwhite; width: 280px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=recycle.image>
        {{ recycle.brand }}{{ recycle.model }}<br>
        {{ recycle.model }}, {{ recycle.year }}г.в., {{ recycle.probeg }} км, {{ recycle.transmission }}, {{ recycle.engine
        }},
        {{ recycle.power }}л/с<br>
        {{ recycle.price }}₽<br>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, watch } from "vue"
const recycleInfo = inject("recycleInfo")
</script>