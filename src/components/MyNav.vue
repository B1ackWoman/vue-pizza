<script setup>
defineProps({
  content: String,
  isActive: Boolean,
})

const emit = defineEmits(['isActiveFunc'])
</script>

<template>
  <button
    class="px-4 py-2 my-1 mx-1 rounded-2xl font-bold hover:shadow-sm transition duration-100"
    @click="emit('isActiveFunc')"
    :style="{
      backgroundColor: isActive ? 'white' : '',
      color: isActive ? 'rgb(251 146 60)' : '',
      boxShadow: isActive ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : '',
      transform: isActive ? 'translateY(-3px)' : ''
    }"
  >
    {{ content }}
  </button>
</template>
