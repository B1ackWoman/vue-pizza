<script setup>

defineProps({
  imageUrl: String,
  title: String,
})

 const emit = defineEmits(['openModel'])

</script>

<template>
  <div
    class="flex gap-2 h-13 hover:bg-orange-50 px-2 py-1 items-center"
    @click="emit('openModel')"
    >
    <img class="w-10" :src="imageUrl" alt="">
    <span>{{ title }}</span>
  </div>
</template>
