<template>
    <div v-for="card in cardsInfo"
        style="background-color: ghostwhite; width: 300px; height: 300px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 300px; height: 200px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=card.image>
        <RouterLink :to="{ name: 'product', params: { id: card.id } }">{{ card.brand }}{{ card.model }}</RouterLink><br>
        {{ card.model }}, {{ card.year }}г.в., {{ card.probeg }} км, {{ card.transmission }}, {{ card.engine }}, {{
            card.power }}л/с<br>
        {{ card.price }}₽
    </div>

    <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous is-disabled" title="This is the first page">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
            <li>
                <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
            </li>
            <li>
                <a class="pagination-link" aria-label="Goto page 2">2</a>
            </li>
            <li>
                <a class="pagination-link" aria-label="Goto page 3">3</a>
            </li>
        </ul>
    </nav>
</template>



<script setup>
import axios from "axios"
import { ref } from "vue"






const cardsInfo = ref([])
axios.get("http://localhost:3000/products").then((res) => {
    console.log(res.data)
    const tempData = res.data.map((item, index) => {
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
    cardsInfo.value = tempData
    console.log(tempData)
}
)
</script>