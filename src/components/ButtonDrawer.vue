<script setup>
import { inject } from 'vue';

defineProps ({
  money: Number,
  amount: Number,
  imageUrl: String,
  disabled: Boolean,
})

const { openDrawerFunc } = inject('model')
const { cart, allPrice } = inject('cart')

</script>

<template>
  <div @click="openDrawerFunc" class="group relative h-full cursor-pointer flex bg-orange-500 text-white px-4 py-2 items-center rounded-2xl transition hover:opacity-95">
    <b class="pr-3">{{ allPrice }} ₽</b>
    <span class="relative w-1 h-full border-r border-orange-300"></span>
    <div class="flex pl-3 items-center group-hover:opacity-0 transtion duration-200">
      <img class="w-5 h-5 mr-1" width="" :src=imageUrl alt="">
      <b> {{ cart.length }} </b>
    </div>
    <img class="absolute right-6 w-4 h-5 -translate-x-2 opacity-10 transtion duration-200 group-hover:opacity-100 group-hover:translate-x-1" src="/public/assets/images/arrow-right.svg" alt="">
  </div>
</template>
