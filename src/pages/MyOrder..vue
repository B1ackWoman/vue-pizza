<script setup>
import OrderComp from '@/components/OrderComp.vue';
import CardDrawerList from '@/components/CardDrawerList.vue';
import ForOrderInput from '@/components/ForOrderInput.vue';


import { inject, onMounted, onUnmounted } from 'vue';


const { order, animateOrder, placeOrder } = inject('Order')


</script>

<template>
  <div :class="['flex justify-center w-full pb-16 transition duration-500', animateOrder == true ? '-translate-y-5 opacity-100' : 'opacity-0']">
    <div class="flex flex-col w-full h-full bg-slate-50 max-w-screen-xl">
      <div class="py-10">
        <h2 class="text-4xl font-bold" >Оформление заказа</h2>
      </div>
      <div class="flex">
        <div class="flex flex-col w-2/3 gap-10">
          <order-comp content="1. Корзина">
            <div>
              <CardDrawerList :items="order"/>
            </div>
          </order-comp>
          <order-comp content="2. Персональные данные">
            <div class="grid grid-cols-2 gap-4">
              <ForOrderInput content="Имя" />
              <ForOrderInput content="E-mail" />
              <ForOrderInput content="Фамилия" />
              <ForOrderInput content="Телефон"/>
            </div>
          </order-comp>
          <order-comp content="3. Адрес доставки">
            <div class="flex flex-col gap-4 h-[200px]">

              <ForOrderInput />
              <ForOrderInput content="" :full="true"/>
            </div>
          </order-comp>
        </div>
        <div class="sticky flex-grow">

        </div>
      </div>
    </div>
  </div>
</template>

