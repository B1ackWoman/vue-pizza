<script setup>
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

const emit = defineEmits(['countPlus', 'countMinus', 'cartDelItem'])

</script>

<template>
  <div :class="['flex bg-white rounded-xl shadow-md mx-4 px-4 py-4 gap-4 transition duration-300 transform',
                animateCardDel === id ? '-translate-x-3 opacity-0' : ''
  ]">
    <div>
      <img width="80" :src="imageUrl" alt="">
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-col border-b pb-4">
        <span class="text-xl font-bold">{{ name }}</span>
        <span class="text-xs text-slate-500">{{ type }} {{ needSize }} см{{ allIng ? ', ' + allIng : ''  }}</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-4 items-center">
          <ButtonForDrawer :disabled="disabled" content="–" @counter="emit('countMinus')"/>
          <span class="font-bold">{{ count }}</span>
          <ButtonForDrawer content="+" @counter="emit('countPlus')"/>
        </div>
        <div class="flex gap-2">
          <span class="font-extrabold">{{ price }} ₽</span>
          <img @click="emit('cartDelItem')" width="18" class="opacity-40 hover:opacity-100 transition" src="/public/assets/images/delete.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
