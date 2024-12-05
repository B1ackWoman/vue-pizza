<script setup>
import { inject } from 'vue';

import ButtonOrder from './ButtonOrder.vue';
import CardDrawer from './CardDrawer.vue';


const { closeDrawer, openDrawerTrans } = inject('model')

</script>

<template>
  <div class="fixed z-20" >
    <div class="fixed w-full h-full bg-black opacity-50">
    </div>
    <div class="fixed flex flex-col justify-between h-full w-full max-w-[400px] bg-slate-100 right-0 rounded-tl-md transition duration-300"
      :style="{
        transform: openDrawerTrans ? 'translateX(0)' : 'translateX(100%)'
      }"
    >
      <div>
        <div class="flex justify-between h-10 py-10 px-4 items-center">
          <div class="text-xl">
            <span class="font-semibold">В корзине </span>
            <span class="font-bold">3 товара</span>
          </div>
          <div @click="closeDrawer" class="relative group cursor-pointer top-0 right-0 w-10 h-10 ">
            <span class="absolute w-4 border-b border-1 border-black right-1 top-3 rotate-45  group-hover:scale-x-125 transtion duration-200"></span>
            <span class="absolute w-4 border-b border-1 border-black right-1 top-3 -rotate-45  group-hover:scale-x-125 transtion duration-200"></span>
          </div>
        </div>
        <CardDrawer />
      </div>
      <div class="flex flex-col gap-4 bg-white py-10 px-6 rounded-t-lg ">
        <div class="flex items-end">
          <span class="py-0 text-slate-400 text-lg">Итого</span>
          <div class="w-full border-b border-dashed border-slate-500"></div>
          <span class="text-nowrap font-bold text-lg">575 Р</span>
        </div>
        <ButtonOrder content="Оформить заказ"/>
      </div>
    </div>
  </div>
</template>
