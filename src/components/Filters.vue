<template>
    <div
        style="background-color: #efefef; border-radius: 10px; width: 900px; height: 170px; font-size: 17px; color: #6c6a6a;">

        <div>
            <div
                style="width: 370px; background-color: white; border-radius: 10px; height:60px; float: left; padding: 7px; margin: 7px;">
                <div v-for="brand, index in brands" style="display: inline-block;">
                    <div @click="search.push('&brand=' + brand), window.push(brand)">&nbsp;{{ brand }}</div>
                </div>
            </div>
        </div>

        <div
            style="width: 270px; background-color: white; border-radius: 10px; height:60px; float: left; padding: 7px; margin: 7px;">
            <div v-for="kuzov in kuzovs" style="display: inline-block;">
                <div @click="search.push('&kuzov=' + kuzov), window.push(kuzov)">&nbsp;{{ kuzov }}</div>
            </div>
        </div>

        <div
            style="width: 180px; background-color: white; border-radius: 10px; height:60px; padding: 7px; margin: 7px; float: left">
            <div v-for="transmission in transmissions" style="display: inline-block;">
                <div @click="search.push('&transmission=' + transmission), window.push(transmission)">&nbsp;{{ transmission
                }}</div>
            </div>
        </div>

        <div style="width: 800px; background-color: gray; height: 2px; float: right; margin-right: 50px; margin-top: 10px;">
        </div>

        <div>
            <div v-for="wind, index in window" style="display: inline-block;">
                <button style=" background-color: white; border: 0;  margin: 7px; color: red; font-size: 17px;"
                    @click="window.splice(index, 1), search.splice(index, 1)">{{ wind }} ✖</button>
            </div>
        </div>

    </div>

    <div v-for="filter in filtersInfo"
        style="background-color: ghostwhite; width: 280px; height: 320px; display: inline-block; margin: 10px; border-radius: 1.5ch">
        <img style="width: 340px; height: 180px; border-radius: 1.5ch 1.5ch 0ch 0ch;" :src=filter.image>
        <RouterLink :to="{ name: 'product' }"
            @click="productInfo.length = 0, productInfo.push(filter), console.log(productInfo)">{{
                filter.brand }}{{ filter.model }}</RouterLink><br>
        {{ filter.model }}, {{ filter.year }}г.в., {{ filter.probeg }} км, {{ filter.transmission }}, {{ filter.engine }},
        {{
            filter.power }}л/с<br>
        {{ filter.price }}₽<br>
        <button
            style="width: 90px; height: 30px; background-color: red; border: 0; color: white; border-radius: 5px; margin-left: 80px"
            @click="recycleInfo.push(filter)">Купить</button>
    </div>
</template>




<script setup>
import axios from "axios";
import { inject, ref, watch, onMounted } from "vue"

const mainInfo = inject("mainInfo") //массив основного axios

let brands = ref() // удаление дубликатов марок
function pre() {
    let BrandList = []
    let i = 0
    while (i < mainInfo.value.length) {
        BrandList.push(mainInfo.value[i].brand)
        i++
    }
    const uniqueArr = [...new Set(BrandList)];
    brands.value = uniqueArr
}
setTimeout(pre, 100)

let kuzovs = ["Седан", "Хэтчбек", "Универсал", "Внедорожник"]
let transmissions = ["АКПП", "МКПП", "Робот", "Вариатор"]

const window = ref([]) //окно марок
let search = [] //&brand=&transmissions=&kuzov=
const productInfo = inject("productInfo") //добавление в продукт
const recycleInfo = inject("recycleInfo") //добавление в корзину

const filtersInfo = ref([])
function axiosget() {
    axios.get(`http://localhost:3000/products?${search.join('')}`).then((res) => {
        const filtersData = res.data.map((item, index) => {
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
        filtersInfo.value = filtersData
    })
}
watch(window.value, () => {
    axiosget()
})
onMounted(axiosget)
</script>