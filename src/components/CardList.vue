<script setup>
import { inject } from 'vue';

import debounce from 'debounce';

import MyCard from './MyCard.vue';

defineProps ({
  items: Array,
  content: String,
  title: String,
})

const { itemTime, modelOpen } = inject('model')
const { modelOpenTrans } = inject('modelTr')

const debounceOpen = (debounce(() => {
  modelOpenTrans.value = true
}, 300))


const openModel = (item) => {
  modelOpen.value = !modelOpen.value
  document.body.style.overflow = 'hidden'
  itemTime.value = item
  modelOpenTrans.value = false
  debounceOpen()
}

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
      @openModel="openModel(item)"
    />
  </div>
</template>
