<script setup>
import { inject, ref } from "vue"


defineProps ({
  content: String,
  addContent: String,
  isAdded: Boolean,
  addOrDel: Function,
  imageTrue: String,
  imageFalse: String,
})

</script>

<template>
  <div class="flex gap-4 my-3 cursor-pointer" @click="addOrDel">
    <img :src="isAdded ? imageTrue : imageFalse" alt="">
    <span> {{ content }} {{ addContent }}</span>
  </div>
</template>
