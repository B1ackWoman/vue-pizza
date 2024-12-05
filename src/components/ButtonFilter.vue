<script setup>
import { ref, inject } from 'vue'

defineProps ({
  contentItem: Array,
  count: Number,
})


const emit = defineEmits(['contentFunc'])

</script>

<template>
  <div
    class="grid-cols-2 rounded-2xl bg-slate-100 gap-1"
    :style="{
      display: 'grid',
      gridTemplateColumns: 'repeat(' + count + ', minmax(0, 1fr))'
    }"
  >
    <button
      v-for="item in contentItem"
      :key="item.id"
      :disabled="item.disabled"
      @click="() => emit('contentFunc', item)"
      :class="[
        'py-2 px-7 rounded-2xl transiton duration-300',
        item.disabled ? 'text-slate-400' : 'hover:shadow-md hover:-translate-y-2 hover:bg-white'
      ]"
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
