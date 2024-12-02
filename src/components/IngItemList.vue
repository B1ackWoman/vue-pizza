<script setup>
import { inject } from 'vue';

import IngItem from './IngItem.vue';

defineProps({
  items: Array,
})

const emit = defineEmits(['addIng'])

</script>

<template>
  <div class="grid grid-cols-3 gap-2 px-7 mt-5 pb-24">
    <IngItem
      v-for="item in items"
      :key="item.id"
      :image-url="item.imageUrl"
      :is-added="item.isAdded"
      :text="item.text"
      :price="item.price"
      @add-Ing="() => emit('addIng', item)"
      />
  </div>
</template>
