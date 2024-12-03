<script setup>
import NavList from './NavList.vue';

import MySort from './MySort.vue';

defineProps ({
  contentList: Number
})

</script>

<template>
  <div class="flex justify-between">
    <div class="flex bg-slate-50 rounded-2xl w-min">
      <NavList />
    </div>
    <div>
      <MySort />
    </div>
  </div>
</template>
