<script setup>
import { inject } from 'vue';


defineProps({
  content: String,
  left: Boolean,
})

const emit = defineEmits(['funcB'])

const { closeDrawer } = inject('model')

</script>

<template>
  <button @click="emit('funcB')" class="flex gap-3 justify-center w-full bg-orange-500 text-white py-2 font-bold rounded-xl text-lg font-semibold hover:bg-orange-400 transition">
    <img v-show="left" class="h-13 grayscale rotate-180" width="15" src="/public/assets/images/arrow-right.svg" alt="">
    {{ content }}
    <img v-show="!left" class="h-13 grayscale" width="15" src="/public/assets/images/arrow-right.svg" alt="">
  </button>
</template>
