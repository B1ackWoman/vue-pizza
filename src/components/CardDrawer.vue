<script setup>
import { inject } from 'vue';

import ButtonForDrawer from './ButtonForDrawer.vue';

defineProps ({
  item: Object,
  price: Number,
  name: String,
  imageUrl: String,
  id: Number,
  count: Number,
  needSize: Number,
  allIng: String,
  type: String,
  disabled: Boolean,
  animateCardDel: Number,
})

const { cart } = inject('cart')
const { placeOrders } = inject('Order')

const emit = defineEmits(['countPlus', 'countMinus', 'cartDelItem'])

</script>

<template>
  <div :class="['flex bg-white rounded-xl gap-4 transition duration-300 transform',
                animateCardDel === id && cart.length !== 1 ? '-translate-x-3 opacity-0' : '',
                animateCardDel === id && cart.length == 1 ? '-translate-y-3 opacity-0' : '',
                placeOrders == true ? 'border-0 shadow-0' : 'shadow-md mx-4 px-4 py-4'
  ]">
    <div>
      <img width="80" :src="imageUrl" alt="">
    </div>
    <div :class="['flex gap-2 w-full', placeOrders == true ? 'border-0 flex-row justify-between' : 'flex-col']">
      <div :class="['flex flex-col pb-4 justify-center', placeOrders == true ? 'border-0 flex-row' : 'border-b']">
        <span class="text-xl font-bold">{{ name }}</span>
        <span class="text-xs text-slate-500">{{ type }} {{ needSize != '0' ? needSize + ' см' : ''}} {{type !== '' ? allIng ? ', ' + allIng : '' : '' }}</span>
      </div>
      <div class="flex justify-between items-center gap-3">
        <div :class="['flex flex-grow items-center justify-between', placeOrders == true ? 'gap-24 flex-row-reverse mr-3' : '']">
          <div class="flex gap-4 items-center">
            <ButtonForDrawer :disabled="disabled" content="–" @counter="emit('countMinus')"/>
            <span class="font-bold">{{ count }}</span>
            <ButtonForDrawer content="+" @counter="emit('countPlus')"/>
          </div>
          <span class="font-extrabold">{{ price }} ₽</span>
        </div>
        <img @click="emit('cartDelItem')" width="18" class="opacity-40 hover:opacity-100 transition" src="/public/assets/images/delete.svg" alt="">
      </div>
    </div>
  </div>
</template>
