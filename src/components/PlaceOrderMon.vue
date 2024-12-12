<script setup>

defineProps({
  content: String,
  price: Number,
  wdth: Number,
  hght: Number,
})

</script>


<template>
  <div class="flex text-slate-500 gap-2 items-center">
    <img :class="'w-' + wdth + ' h-' + hght" src="/assets/images/order3.png" alt="">
    <span class="text-lg">{{ content }}</span>
    <span class="relative flex-grow border-b border-slate-300 border-dashed -bottom-2"></span>
    <span class="text-xl text-black font-bold">{{ price }} ₽</span>
  </div>
</template>
