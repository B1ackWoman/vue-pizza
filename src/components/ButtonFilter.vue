<script setup>
import { ref, inject } from 'vue'

defineProps ({
  contentItem: Array
})


const emit = defineEmits(['contentFunc'])

</script>

<template>
  <div
   class="grid grid-cols-3 grid-rows-1 rounded-2xl bg-slate-100 gap-1">
    <button
      v-for="item in contentItem"
      :key="item.id"
      @click="() => emit('contentFunc', item)"
      class="py-2 px-7 rounded-2xl hover:bg-white hover:shadow-md hover:-translate-y-2 transiton duration-300"
      :style="{
        backgroundColor: item.ButtonOnOff ? 'white' : '',
        boxShadow: item.ButtonOnOff ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : '',
        transform: item.ButtonOnOff ? 'translateY(-5px)' : ''
      }"
      >
      {{ item.content }}
    </button>
  </div>
</template>
