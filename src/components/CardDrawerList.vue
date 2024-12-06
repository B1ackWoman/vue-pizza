<script setup>
import CardDrawer from './CardDrawer.vue';




defineProps({
  items: Array,
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <CardDrawer v-for="item in items"
     :key="item.id"
     :item="item"
    />
  </div>
</template>
