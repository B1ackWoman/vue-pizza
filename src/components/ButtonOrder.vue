<script setup>
import { inject } from 'vue';


defineProps({
  content: String,
  left: Boolean,
  order: Boolean,
})

const emit = defineEmits(['funcB'])

const { cart } = inject('cart')

</script>

<template>
  <button
    :disabled="order == true && cart.length === 0"
    @click="emit('funcB')"
    :class="[
      'flex gap-3 justify-center w-full py-2 font-bold text-white rounded-xl text-lg font-semibold transition',
      order == true && cart.length == 0 ? 'bg-slate-400 duration-300' : ' bg-orange-500 hover:bg-orange-400'
      ]">
    <img v-show="left" class="h-13 grayscale rotate-180" width="15" src="/public/assets/images/arrow-right.svg" alt="">
    {{ content }}
    <img v-show="!left" class="h-13 grayscale" width="15" src="/public/assets/images/arrow-right.svg" alt="">
  </button>
</template>
