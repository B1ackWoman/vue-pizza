<script setup>

defineProps ({
  content: String,
  imageUrl: String,
  price: Number,
  title: String,
  discription: String,
  before: String,
})

</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex justify-center py-5 bg-orange-50 rounded-2xl">
      <img :src="imageUrl" alt="">
    </div>
    <div class="flex flex-col justify-between flex-grow">
      <div class="my-4">
        <h2 class="text-2xl font-bold my-2">{{ title }}</h2>
        <span class="text-gray-400">{{ discription }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-2xl">от <b>{{ price }} ₽</b></span>
        <button class="flex bg-orange-50 py-2 px-3 rounded-xl">
          <img :src="before" alt="">
          <span class="text-orange-400 text-xl font-bold" >{{ content }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
