<script setup>

defineProps ({
  content: String,
  imageUrl: String,
  width: String,
  drawer: Boolean
})

defineEmits ({
  clickFunc: Function,
})


</script>

<template>
  <button @click="() => $emit('clickFunc')" class=" flex gap-1 text-orange-400 border border-orange-600 rounded-2xl py-3 px-4 items-center text-center transition">
    <img :width=width :src=imageUrl alt="">
    <span class="font-bold text-md"> {{ content }} </span>
  </button>
</template>
