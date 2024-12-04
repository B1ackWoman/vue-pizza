<script setup>

defineProps({
  content: String,
})

</script>

<template>
  <button class="flex items-center justify-center text-2xl text-orange-500 border w-8 h-8 border-orange-500 rounded-xl">
    {{ content }}
  </button>
</template>
