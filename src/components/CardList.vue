<script setup>
import MyCard from './MyCard.vue';

defineProps ({
  items: Array,
  content: String,
  title: String,
})
</script>

<template>
  <h2 class="text-3xl font-extrabold mb-4">{{ title }}</h2>
  <div class="grid grid-cols-3 gap-10 mb-20" v-auto-animate>
    <MyCard
      v-for="item in items"
      :key="item.id"
      :content=content
      :title="item.name"
      :image-url="item.imageUrl"
      :discription="item.discription"
      :price="item.price"
    />
  </div>
</template>
