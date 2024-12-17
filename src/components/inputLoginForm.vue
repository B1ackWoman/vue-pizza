<script setup>

defineProps({
  content: String,
})

</script>

<template>
  <div class="flex flex-col w-full gap-1">
    <div>
      <span>{{ content }}</span>
      <span class="text-orange-600"> *</span>
    </div>
    <input class="w-full h-12 px-4 border rounded-xl focus:outline-none" type="text">
  </div>
</template>
