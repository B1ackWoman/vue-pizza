<script setup>
import { inject } from 'vue';

defineProps ({
  money: Number,
  amount: Number,
  imageUrl: String,
})

const { openDrawerFunc } = inject('model')

</script>

<template>
  <div @click="openDrawerFunc" class="group relative cursor-pointer flex bg-orange-500 text-white px-4 py-2 items-center rounded-2xl transition hover:opacity-95">
    <b class="pr-3">{{ money }} ₽</b>
    <span class="w-1 h-full border-r border-orange-400"></span>
    <div class="flex pl-3 items-center group-hover:opacity-10 transtion duration-200">
      <img class="w-5 h-5 mr-1" width="" :src=imageUrl alt="">
      <b> {{ amount }} </b>
    </div>
    <img class="absolute right-6 w-7 h-8  opacity-10 transtion duration-200 group-hover:opacity-100 group-hover:translate-x-2" src="/public/assets/images/arrowright.png" alt="">
  </div>
</template>
