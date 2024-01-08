<template>
    <div class="filtersFilters">

        <div>
            <div class="filterColors">
                <div v-for="brand, index in brands" style="display: inline-block;">
                    <div @click="search.push('&color=' + brand), window.push(brand)">&nbsp;{{ brand }}</div>
                </div>
            </div>
        </div>

        <div class="filterKuzov">
            <div v-for="kuzov in kuzovs" style="display: inline-block;">
                <div @click="search.push('&kuzov=' + kuzov), window.push(kuzov)">&nbsp;{{ kuzov }}</div>
            </div>
        </div>

        <div class="filterTransmission">
            <div v-for="transmission in transmissions" style="display: inline-block;">
                <div @click="search.push('&transmission=' + transmission), window.push(transmission)">&nbsp;{{ transmission
                }}</div>
            </div>
        </div>
        <div class="filterButtonsBlock">Выбрано:
            <div v-for="wind, index in window" style=" display: inline-block;">
                <button class="filterButtons" @click="window.splice(index, 1), search.splice(index, 1)">{{ wind }}
                    ✖</button>
            </div>
        </div>

    </div>











    <div v-for="filter, index in filtersInfo" class="filterMain">

        <div class="filterNewCar">Новое авто</div>

        <RouterLink class="name" :to="{ name: 'product' }" @click="productInfo.length = 0, productInfo.push(filter)">{{
            filter.model }} {{ filter.year
    }}</RouterLink>

        <div class="filterInfo">
            {{ filter.power }}л.с. / {{ filter.engine }} / {{ filter.transmission }} / {{ filter.kuzov }} / {{ filter.color
            }}</div>

        <img class="filterHomeImg" :src=filter.image[1]>

        <div class="filterPrice"> {{ filter.price }} ₽</div>

        <div class="filterKredit"> {{ Math.round(filter.price / 84) }} ₽/мес</div>

        <button class="filterBuyButton"
            @click="recycleInfo.push(filter), summInfo = +summInfo + +filter.price">Купить</button>
    </div>
</template>




<script setup>
import axios from "axios";
import { inject, ref, watch, onMounted } from "vue"

const mainInfo = inject("mainInfo") //массив основного axios

let brands = ["Синий", "Черный", "Серебристый", "Красный"] // удаление дубликатов марок


let kuzovs = ["Седан", "Хэтчбек", "Универсал", "Кроссовер"]
let transmissions = ["АКПП", "МКПП", "Вариатор"]

const window = ref([]) //окно марок
let search = [] //&color=&transmissions=&kuzov=
const productInfo = inject("productInfo") //добавление в продукт
const recycleInfo = inject("recycleInfo") //добавление в корзину
const summInfo = inject("summInfo") //сумма

const filtersInfo = ref([])
function axiosget() {
    axios.get(`http://localhost:3000/products?${search.join('')}`).then((res) => {
        const filtersData = res.data.map((item, index) => {
            return {
                id: res.data[index].id,
                model: res.data[index].model,
                year: res.data[index].year,
                power: res.data[index].power,
                kuzov: res.data[index].kuzov,
                transmission: res.data[index].transmission,
                engine: res.data[index].engine,
                color: res.data[index].color,
                price: res.data[index].price,
                image:{
                1: res.data[index].image1
            }
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