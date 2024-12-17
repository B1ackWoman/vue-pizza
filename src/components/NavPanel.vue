<script setup>
import { inject } from 'vue'

import NavList from './NavList.vue';
import ButtonDrawer from './ButtonDrawer.vue';

defineProps ({
  contentList: Number,
  amount: Number,
})

</script>

<template>
  <div class="flex justify-between">
    <div class="flex bg-slate-50 rounded-2xl w-min">
      <NavList />
    </div>
    <div class="py-1">
      <ButtonDrawer @func-b="openLoginForm" :money="500" :amount="amount" image-url="assets/images/drawer.png"/>
    </div>
  </div>
</template>
