<script setup>

defineProps({
  imageUrl: String,
  text: String,
  price: Number,
})

const emit = defineEmits(['addIng'])

</script>

<template>
  <div @click="() => emit('addIng')" class="flex flex-col justify-between bg-white rounded-2xl text-center shadow-lg py-2 px-3 cursor-pointer hover:shadow-md transtion duration-300">
    <div>
      <img :src="imageUrl" alt="Ing">
      <span class="">{{ text }}</span>
    </div>
    <span class="font-bold">{{ price }} ₽</span>
  </div>
</template>
