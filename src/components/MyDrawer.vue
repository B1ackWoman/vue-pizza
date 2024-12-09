<script setup>
import { inject } from 'vue';

import ButtonOrder from './ButtonOrder.vue';
import CardDrawerList from './CardDrawerList.vue';

const { cart, allPrice, animateForDrawer } = inject('cart')
const { closeDrawer, openDrawerTrans, allPlaceOrder } = inject('model')

</script>

<template>
  <div class="fixed z-20" >
    <div @click="closeDrawer" class="fixed w-full h-full bg-black opacity-50">
    </div>
    <div class="fixed flex flex-col justify-between h-full w-full max-w-[400px] bg-slate-100 right-0 rounded-tl-md transition duration-300"
      :style="{
        transform: openDrawerTrans ? 'translateX(0)' : 'translateX(100%)'
      }"
    >
      <div>
        <div class="flex justify-between h-10 py-10 px-4 items-center">
          <div v-show="!animateForDrawer" :class="['text-xl', cart.length === 0 ? '-translate-y-3 transtion duration-300 opacity-0' : 'opacity-100']">
            <span class="font-semibold">В корзине </span>
            <span class="font-bold">{{ cart.length }} товара</span>
          </div>
          <div class="flex flex-grow justify-end">
            <div @click="closeDrawer" class="relative group cursor-pointer top-0 right-0 w-10 h-10 ">
              <span class="absolute w-4 border-b border-1 border-black right-1 top-3 rotate-45  group-hover:scale-x-125 transtion duration-200"></span>
              <span class="absolute w-4 border-b border-1 border-black right-1 top-3 -rotate-45  group-hover:scale-x-125 transtion duration-200"></span>
            </div>
          </div>
        </div>
        <div class="relative" v-auto-animate>
          <CardDrawerList :items="cart" />
        </div>
      </div>
      <div
        v-show="cart.length < 1"
        :class="[
          'flex w-full h-full flex-col justify-center items-center px-14 text-center gap-1 mb-10 transtion duration-300',
          animateForDrawer === false  ? '-translate-y-4 transition duration-300 opacity-100' : 'opacity-0'
        ]"
      >
        <img width="120px" src="/public/assets/images/empty-box.png" alt="">
        <h2 class="text-xl font-bold">Корзина пустая</h2>
        <span class="text-sm">Добавьте хотя бы один товар, чтобы совершить заказ</span>
        <div class="w-full px-7 mt-3">
          <ButtonOrder @func-b="closeDrawer" :left="true" content="Вернуться"/>
        </div>
      </div>
      <div v-show="cart.length > 0" :class="[
        'flex flex-col gap-4 bg-white py-10 px-6 rounded-t-lg',
        cart.length === 0 || animateForDrawer === true ? 'translate-y-3 transtion duration-300 opacity-0' : 'opacity-100'
      ]">
        <div class="flex items-end">
          <span class="py-0 text-slate-400 text-lg">Итого</span>
          <div class="w-full border-b border-dashed border-slate-500"></div>
          <span class="text-nowrap font-bold text-lg">{{ allPrice }} ₽</span>
        </div>
        <ButtonOrder @func-b="allPlaceOrder" content="Оформить заказ"/>
      </div>
    </div>
  </div>
</template>
