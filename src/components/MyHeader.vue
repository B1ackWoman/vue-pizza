<script setup>
import MyButton from './MyButton.vue';
import ButtonDrawer from './ButtonDrawer.vue';

</script>

<template>
  <div>
    <div class="flex justify-between h-12 gap-4">
      <div class="flex gap-3">
        <img id="pizza" width="50" src="/logo.png" alt="">
        <div class="flex flex-col items-center">
          <h2 class="font-black text-2xl">VUE PIZZA</h2>
          <span class="text-slate-500 text-md">вкусней уже некуда</span>
        </div>
      </div>
      <div class="relative w-7/12">
        <img width="18" class="absolute top-3 left-3" src="/public/assets/images/Vector.svg" alt="">
        <input class="bg-zinc-50 h-full w-full rounded-xl pl-10 text-xl border border-zinc-50 focus:outline-none focus:border-slate-200" type="text" placeholder="Поиск пиццы...">
      </div>
      <div class="flex gap-3">
        <MyButton width="13" content="Войти" image-url="assets/images/Group.svg"/>
        <ButtonDrawer :money="500" :amount="3" image-url="assets/images/drawer.png"/>
      </div>
    </div>
  </div>
</template>

<style>
  .pizza {
    height: 40px !important;
  }
</style>
