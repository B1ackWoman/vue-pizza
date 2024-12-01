<script setup>
import { inject, ref} from 'vue'
import FilterList from './FilterList.vue'
import WhatFuck from './WhatFuck.vue';

const { size, ingredients, type, addOrDelSize, addOrDelIng, addOrDelType } = inject('box')

</script>

<template>
  <div class="flex flex-col w-max gap-10">
    <div class="">
      <h2 class="font-bold text-2xl mb-5">Фильтрация</h2>
      <FilterList
        :items="size"
        addContent="см"
        image-true="public/assets/images/on.png"
        image-false="public/assets/images/off.png"
        @add-or-del="addOrDelSize"
      />
    </div>
    <div>
      <WhatFuck />
    </div>
    <div class="">
      <h2 class="font-bold text-md mb-5">Ингридиенты:</h2>
      <FilterList
        :items="ingredients"
        image-true="public/assets/images/on.png"
        image-false="public/assets/images/off.png"
        @add-or-del="addOrDelIng"
      />
    </div>
    <div class="">
      <h2 class="font-bold text-md mb-5">Тип теста:</h2>
      <FilterList
        :items="type"
        image-true="public/assets/images/onrad.png"
        image-false="public/assets/images/offrad.png"
        @add-or-del="addOrDelType"
      />
    </div>
    <div>
      <button class="w-full bg-orange-500 text-white font-bold text-md py-3 rounded-2xl">Применить</button>
    </div>
  </div>
</template>

<style>
#imgOne {
  top: 15px !important;
}

#imgTwo {
  top: 15px !important;
}

</style>
