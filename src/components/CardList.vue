<script setup>
import { inject } from 'vue';

import debounce from 'debounce';

import MyCard from './MyCard.vue';

defineProps ({
  items: Array,
  content: String,
  title: String,
  id: String,
})

const { itemTime, modelOpen, openModel } = inject('model')

</script>

<template>
  <h2 :id="id" class="text-3xl font-extrabold mb-4"
    style="scroll-margin-top: 120px"
  >{{ title }}</h2>
  <div class="grid grid-cols-3 gap-10 mb-20" v-auto-animate>
    <MyCard
      v-for="item in items"
      :key="item.id"
      :content=content
      :title="item.name"
      :image-url="item.imageUrl"
      :discription="item.discription"
      :price="item.price"
      :id="item.id"
      @openModel="openModel(item)"
    />
  </div>
</template>
