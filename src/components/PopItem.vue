<script setup>
import { onMounted, provide, ref, watch, inject } from 'vue';

import axios, { all } from 'axios';

import ButtonFilter from './ButtonFilter.vue';
import IngItemList from './IngItemList.vue';

const allContent = ref([])
const sizeContent = ref([]);
const typeContent = ref([]);
const timeContent = ref([])

const { ingForPizza } = inject('box')
const { modelOpen } = inject('model')

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

const addIng = (item) => {
  ingForPizza.value = ingForPizza.value.map(itm => {
    if (item.id === itm.id) {
      return {
        ...itm,
        isAdded: !item.isAdded,
      };

    } else {
      return itm;
    }
  })
  console.log(ingForPizza.value, 1321321321)
}

const closeModal = () => {
  modelOpen.value = !modelOpen.value
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
  <div class="fixed z-20 w-full h-full bg-black opacity-50">
  </div>
  <div class="fixed w-full h-full max-h-[650px] max-w-screen-xl z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div @click="closeModal" class="fixed group cursor-pointer top-0 right-16 w-10 h-10">
      <span class="absolute w-7 border-b border-2 border-white right-5 top-6 rotate-45 group-hover:border-slate-100 group-hover:scale-x-125 transtion duration-200"></span>
      <span class="absolute w-7 border-b border-2 border-white right-5 top-6 -rotate-45 group-hover:border-slate-100 group-hover:scale-x-125 transtion duration-200"></span>
    </div>
  </div>
  <div class="fixed flex z-20 w-full h-full max-h-[650px] max-w-screen-lg top-1/2 left-1/2 bg-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
    <div class="w-1/2 h-full px-10 flex items-center justify-center">
      <img width="100%" src="/public/assets/items/1.png" alt="">
    </div>
    <div class="w-1/2">
      <div class="flex flex-col gap-1 py-9 bg-slate-50 h-full  overflow-hidden overflow-y-scroll">
        <div class="flex flex-col px-7 gap-2">
          <div class="flex flex-col gap-1">
            <h2 class="font-extrabold text-2xl">Сырная</h2>
            <span class="text-gray-400 mb-4">40 см, тонкая пицца</span>
          </div>
          <div class="flex flex-col gap-5">
            <ButtonFilter :content-item="sizeContent" @content-func="onOrOff" :count="3"/>
            <ButtonFilter :content-item="typeContent" @content-func="onOrOff" />
          </div>
        </div>
        <div class="relative">
          <IngItemList :items="ingForPizza" @add-ing="addIng"/>
          <div class="fixed flex justify-center bottom-0 py-5 px-8 bg-slate-50 w-1/2">
            <button class="bg-orange-500 text-white font-bold py-4 w-full rounded-2xl">Добавить в корзину за 799 Р</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
