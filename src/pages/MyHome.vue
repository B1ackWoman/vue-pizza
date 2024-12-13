<script setup>

import { inject, onMounted, onUnmounted } from 'vue';

import NavPanel from '@/components/NavPanel.vue';
import FilterAll from '@/components/FilterAll.vue';
import CardList from '@/components/CardList.vue';

const { cart, pizzaTime, breakfast, snacks, cocktails, drinks, fetchFilter, fetchItems} = inject('Home')
const { value1, value2, minPrice, maxPrice } = inject('filter')

const backUp = () => {
  value1.value = 0
  value2.value = 0
  minPrice.value = 0
  maxPrice.value = 0
}

onMounted(async () => {
  fetchItems()
  fetchFilter()
})

onUnmounted(async () => {
  backUp()
})
</script>

<template>
  <div  class="sticky top-0 z-10 bg-white flex flex-col items-center border-b shadow-md rounded-xl">
    <div class="w-full max-w-screen-xl py-6 bg-white">
      <NavPanel :amount="cart.length" :content-list="0" />
    </div>
  </div>
  <div :style="{zIndex: 0}" class="relative flex flex-col justify-center items-center w-full h-full py-7 px-7">
    <div class="w-full h-full bg-white rounded-2xl max-w-screen-xl">
        <div class="flex py-10 gap-20">
          <div class="w-min">
            <FilterAll />
          </div>
          <div>
            <CardList ref="pizza" id="Пиццы" title="Пиццы" content="+ Добавить" :items="pizzaTime" />
            <CardList id="Завтрак" title="Завтрак" content="+ Добавить" :items="breakfast" />
            <CardList id="Закуски" title="Закуски" content="+ Добавить" :items="snacks" />
            <CardList id="Коктели" title="Коктели" content="+ Добавить" :items="cocktails" />
            <CardList id="Напитки" title="Напитки" content="+ Добавить" :items="drinks" />
          </div>
        </div>
    </div>
  </div>
</template>
