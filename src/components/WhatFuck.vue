<script setup>
import 'toolcool-range-slider/dist/plugins/tcrs-storage.min.js';
import 'toolcool-range-slider';

import { inject, ref } from 'vue'

const { maxPrice, minPrice, value1, value2 } = inject('filter')

const handleSliderChange = (event) => {
  value1.value = Math.round(event.detail.value1)
  value2.value = Math.round(event.detail.value2)
}

const inputValue1 = (event) => {
  value1.value = event.target.value
}

const inputValue2 = (event) => {
  value2.value = event.target.value
}
</script>

<template>
  <div class="mb-10">
    <h2 class="font-bold text-md mb-5">Цено от и до:</h2>
    <div class="flex gap-4">
      <div class="relative">
        <img id="imgOne" class="absolute right-2 top-3" src="/public/assets/images/rub.png" alt="">
        <input class="w-24 border py-2 px-2 rounded-xl focus:outline-none" type="text" :placeholder="value1" @input="inputValue1">
      </div>
      <div class="relative">
        <img id="imgTwo" class="absolute right-2 top-3" src="/public/assets/images/rub.png" alt="">
        <input class="w-24 border text-black  py-2 px-2 rounded-xl focus:outline-none" type="text" :placeholder="value2" @input="inputValue2">
      </div>
    </div>
  </div>
  <div>
    <!-- Привязываем значения к компоненту tc-range-slider -->
    <tc-range-slider
      id="slider-2"
      slider-width="100%"
      slider-bg="rgb(254 215 170)"
      slider-bg-fill="rgb(251 146 60)"
      pointer-border="1px solid rgb(251 146 60)"
      pointer-border-hover="1px solid rgb(251 146 60)"
      pointer-bg-hover="white"
      pointer-border-focus="1px solid rgb(251 146 60)"
      pointer-bg-focus="white"
      pointer-shadow="0"
      pointer-shadow-hover="0 0 1px rgb(251 146 60)"
      pointer-shadow-focus="0 0 1px rgb(251 146 60)"
      :max="maxPrice"
      :min="minPrice"
      :value1="value1"
      :value2="value2"
      @change="handleSliderChange"
    ></tc-range-slider>
  </div>
</template>
