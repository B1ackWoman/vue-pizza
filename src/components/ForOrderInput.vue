<script setup>

defineProps({
  content: String,
  full: Boolean,
})

</script>

<template>
  <input
    :class="['px-2 py-1 border border-slate-200 focus:outline-none rounded-xl w-full', full == true ? 'flex-grow' : 'h-12']"
    :placeholder="content"
    type="text"
  >
</template>
