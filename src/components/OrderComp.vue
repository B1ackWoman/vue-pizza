<script setup>

defineProps({
  content: String,
})

</script>

<template>
  <div class="bg-white w-full shadow-sm rounded-3xl">
    <div class="px-5 py-5 border-b border-slate-100">
      <h2 class="text-2xl font-semibold" >{{ content }}</h2>
    </div>
    <div class="px-5 py-5">
      <slot></slot>
    </div>
  </div>
</template>
