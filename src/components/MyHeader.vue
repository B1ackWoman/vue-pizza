<script setup>
import MyButton from './MyButton.vue';

</script>

<template>
  <div>
    <div class="flex justify-between h-11 gap-4">
      <div class="flex gap-3 items-center">
        <img id="pizza" class="h-9 " src="/logo.png" alt="">
        <div class="flex flex-col items-center">
          <h2 class="font-black text-2xl">VUE PIZZA</h2>
          <span class="text-slate-400 text-sm leading-3">вкусней уже некуда</span>
        </div>
      </div>
      <div class="flex flex-grow px-10">
        <div class="flex-grow relative">
          <img width="18" class="absolute top-3 left-3" src="/public/assets/images/Vector.svg" alt="">
          <input class="bg-zinc-100 h-full w-full rounded-xl pl-10 text-md border border-zinc-50 focus:outline-none focus:border-slate-300" type="text" placeholder="Поиск пиццы...">
        </div>
      </div>
      <MyButton width="13" content="Войти" image-url="assets/images/Group.svg"/>
    </div>
  </div>
</template>

<style>
  .pizza {
    height: 40px !important;
  }
</style>
