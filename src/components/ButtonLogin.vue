<script setup>

defineProps({
  content: String,
  login: Boolean,
  link: Boolean,
  imageUrl: String,
  wdth: String,
})

</script>

<template>
  <button
    :class="[
      'flex items-center justify-center w-full border rounded-2xl h-12 transition gap-2',
      login === true && link == false
      ? 'bg-orange-500 text-white border-orange-400 hover:bg-orange-400'
      : link == true ? 'bg-orange-50 text-orange-500 border-orange-50 bg-opacity-50 border-opacity-50 hover:bg-opacity-30'
      : 'bg-white border-orange-500 text-orange-500 hover:bg-orange-50 hover:bg-opacity-40'
    ]">
    <img v-show="imageUrl" :width="wdth" :src="imageUrl" alt="">
    {{ content }}
  </button>
</template>
