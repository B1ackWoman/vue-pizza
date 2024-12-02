<script setup>

defineProps({
  imageUrl: String,
  text: String,
  price: Number,
  isAdded: Boolean,
})

const emit = defineEmits(['addIng'])

</script>

<template>
  <div
    @click="() => emit('addIng')"
    class="relative flex flex-col border border-orange-500 border-opacity-0 justify-between bg-white rounded-2xl text-center shadow-lg py-2 px-3 cursor-pointer hover:shadow-md transtion duration-200"
    :style="{
      border: isAdded ? '1px solid rgb(251 146 60)' : '',
    }"
  >
    <img :style="{opacity: isAdded ? '100' : '0'}" class="absolute opacity-0 right-3 top-3 transform duration-200" src="/public/assets/images/add.png" alt="">
    <div>
      <img :src="imageUrl" alt="Ing">
      <span class="">{{ text }}</span>
    </div>
    <span class="font-bold">{{ price }} ₽</span>
  </div>
</template>
