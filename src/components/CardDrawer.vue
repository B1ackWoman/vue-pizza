<script setup>
import { inject, ref } from 'vue';
import ButtonForDrawer from './ButtonForDrawer.vue';
import debounce from 'debounce';

defineProps ({
  item: Object,
})

const animateCardDel = ref()

const debounceForAll = debounce((item) => {
  cart.value = cart.value.filter(itm => itm.id !== item.id)
}, 300)

const { cart } = inject('cart')

const cartDelItem = (item) => {
  animateCardDel.value = item.id
  debounceForAll(item)
}

</script>

<template>
  <div :class="['flex bg-white rounded-xl shadow-md mx-4 px-4 py-4 gap-4 transition duration-300 transform',
                animateCardDel === item.id ? '-translate-x-3 opacity-0' : ''
  ]">
    <div>
      <img width="80" :src="item.imageUrl" alt="">
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-col border-b pb-4">
        <span class="text-xl font-bold">{{ item.name }}</span>
        <span class="text-xs text-slate-500">{{ item.type }} {{ item.needSize }} см, {{ item.allIng.join(', ') }}</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-4 items-center">
          <ButtonForDrawer content="–"/>
          <span class="font-bold">1</span>
          <ButtonForDrawer content="+" />
        </div>
        <div class="flex gap-2">
          <span class="font-extrabold">{{ item.price }} Р</span>
          <img @click="cartDelItem(item)" width="18" class="opacity-40 hover:opacity-100 transition" src="/public/assets/images/delete.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
