<script setup>
import ButtonForDrawer from './ButtonForDrawer.vue';


</script>

<template>
  <div class="flex bg-white rounded-xl shadow-md mx-4 px-4 py-4 gap-4">
    <div>
      <img width="80" src="/public/assets/items/1.png" alt="">
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-col border-b pb-4">
        <span class="text-xl font-bold">Сырная</span>
        <span class="text-xs text-slate-500">Традиционная 20см, Осрая чиризо</span>
      </div>
      <div>
        <div class="flex gap-4 items-center">
          <ButtonForDrawer content="–"/>
          <span class="font-bold">1</span>
          <ButtonForDrawer content="+" />
        </div>
        <div>
          <span></span>
          <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
