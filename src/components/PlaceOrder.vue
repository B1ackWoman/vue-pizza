<script setup>

import PlaceOrderMon from './PlaceOrderMon.vue';
import ButtonOrder from './ButtonOrder.vue';
import { inject } from 'vue';

const { allPrice } = inject('cart')

</script>

<template>
  <div class="sticky w-1/3 flex top-3 h-min rounded-2xl bg-white shadow-sm flex-col px-8 py-10 gap-3">
    <span class="text-xl">Итого: </span>
    <h2 class="text-3xl font-extrabold">{{ allPrice + allPrice * 0.2 + 300 }} ₽</h2>
    <div class="pb-8 flex flex-col gap-3">
      <PlaceOrderMon content="Стоимость корзины" :price="allPrice" />
      <PlaceOrderMon content="Налоги" :price="allPrice * 0.2" />
      <PlaceOrderMon content="Доставка" :price="300" />
    </div>
    <ButtonOrder :order="true" content="Оформить заказ"/>
  </div>
</template>
