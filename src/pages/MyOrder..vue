<script setup>
import OrderComp from '@/components/OrderComp.vue';
import CardDrawerList from '@/components/CardDrawerList.vue';
import ForOrderInput from '@/components/ForOrderInput.vue';
import PlaceOrder from '@/components/PlaceOrder.vue';
import ButtonOrder from '@/components/ButtonOrder.vue';


import { inject, onMounted, onUnmounted } from 'vue';


const { cart } = inject('cart')
const { order, animateOrder, placeOrder } = inject('Order')
const { landing } = inject('all')

</script>

<template>
  <div :class="['flex justify-center w-full pb-16 transition duration-500', animateOrder == true ? '-translate-y-5 opacity-100' : 'opacity-0']">
    <div class="flex flex-col w-full h-full bg-slate-50 max-w-screen-xl">
      <div class="py-10">
        <h2 class="text-4xl font-bold" >Оформление заказа</h2>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col w-2/3 gap-10">
          <order-comp content="1. Корзина">
            <div class="bg-white min-h-[70px]">
              <CardDrawerList :items="cart"/>
              <div class="flex gap-3 items-center" v-show="cart.length == 0" style="animation: base 0.5s ease;">
                <img class="w-16" src="/assets/images/empty-box.png" alt="">
                <div>
                  <h2 class="text-2xl font-bold">Корзина пуста</h2>
                  <span class="text-sm text-slate-500">Добавьте товраы, для оплаты</span>
                </div>
                <router-link to='/' class="flex-grow px-28">
                  <div class="w-full">
                    <ButtonOrder  @click="landing" :left="true" content="Вернуться"/>
                  </div>
                </router-link>
              </div>
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
              <textarea cols="30" rows="5" class="border rounded-xl px-2 py-2 focus:outline-none" placeholder="Комментарий к заказу"></textarea>
            </div>
          </order-comp>
        </div>
        <PlaceOrder />
      </div>
    </div>
  </div>
</template>


<style>

@keyframes base {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
