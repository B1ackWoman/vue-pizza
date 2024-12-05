<script setup>

defineProps({
  content: String,
})

</script>

<template>
  <button class="flex gap-3 justify-center w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-400 transition">
    {{ content }}
    <img class="h-13" width="25" src="/public/assets/images/arrowright.png" alt="">
  </button>
</template>
