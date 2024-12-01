<script setup>
import { onMounted, provide, ref, watch } from 'vue';

import axios, { all } from 'axios';

import ButtonFilter from './ButtonFilter.vue';
import IngItem from './IngItem.vue';

const allContent = ref([])
const sizeContent = ref([]);
const typeContent = ref([]);
const timeContent = ref([])

const fetchFilterButton = async () => {
  try {
    const { data } = await axios.get('https://67184dbcb9589601.mokky.dev/contentFilter')
    allContent.value = data
    sizeContent.value = allContent.value.filter(itm => itm.class === 'size' )
    typeContent.value = allContent.value.filter(itm => itm.class === 'type')
    console.log(typeContent.value)
    console.log(sizeContent.value, 1)
  } catch (err) {
    console.log(err)
  }
}

const onOrOff = (item) => {
  allContent.value = allContent.value.map(itm => {
    if (itm.class === item.class ) {
      return {
        ...itm,
        ButtonOnOff: itm.id === item.id ? true : false
      };

    } else {
      return itm;
    }
  })
  console.log(allContent.value)
}

const newValButton = () => {
  sizeContent.value = allContent.value.filter(itm => itm.class === 'size' )
  typeContent.value = allContent.value.filter(itm => itm.class === 'type')
  console.log(sizeContent.value, 213123213)
}

provide('button', {
  allContent,
  sizeContent,
  typeContent
})

watch(allContent, async () => {
  newValButton()
}, { deep: true })

onMounted(fetchFilterButton)
</script>

<template>
  <div class="fixed z-50 w-full h-full bg-black opacity-30">
  </div>
  <div class="fixed flex z-50 w-full h-full max-h-[800px] max-w-screen-lg top-1/2 left-1/2 bg-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
    <div class="w-1/2 h-full px-10 flex items-center justify-center">
      <img width="100%" src="/public/assets/items/1.png" alt="">
    </div>
    <div class="flex flex-col gap-3 py-9 bg-slate-50 w-1/2 px-7">
      <h2 class="font-extrabold text-2xl">Сырная</h2>
      <span class="text-gray-400">40 см, тонкая пицца</span>
      <ButtonFilter :content-item="sizeContent" @content-func="onOrOff" />
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <IngItem />
      <button></button>
    </div>
  </div>
</template>
