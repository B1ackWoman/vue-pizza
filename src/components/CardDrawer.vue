<script setup>
import ButtonForDrawer from './ButtonForDrawer.vue';

defineProps ({
  item: Array,
})
</script>

<template>
  <div class="flex bg-white rounded-xl shadow-md mx-4 px-4 py-4 gap-4">
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
          <img width="18" class="opacity-40 hover:opacity-100 transition" src="/public/assets/images/delete.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
