<script setup>
import CardDrawer from './CardDrawer.vue';




defineProps({
  items: Array,
})
</script>

<template>
  <transition-group
    class="grid grid-cols-1 gap-4"
    tag="div"
    name="cardList"
  >
    <CardDrawer v-for="item in items"
    :key="item.id"
    :item="item"
    />
  </transition-group>
</template>


<style>

.cardList-leave-active {
  transition: all, 0.3s, ease;
  position: absolute;
}

</style>
