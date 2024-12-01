<script setup>

defineProps ({
  content: String
})
</script>

<template>
  <button class="px-4 py-2 my-1 mx-1 rounded-2xl font-bold">
    {{ content }}
  </button>
</template>
