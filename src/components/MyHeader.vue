<script setup>
import { inject, reactive, ref, toRaw, watch } from 'vue';

import MyButton from './MyButton.vue';
import axios from 'axios';

const { showInputSearch } = inject('input')
const { model } = inject('all')

const filters = reactive({})
const itemsInput = ref([])

const openSearch = () => {
  showInputSearch.value = true
  document.body.style.overflow = 'hidden'
  model.value = true
}

const closeSearch = () => {
  showInputSearch.value = false
  document.body.style.overflow = ''
  model.value = false
}

const filterAdd = (event) => {
  filters.name = `*${event.target.value}*`
  console.log(filters)
}

const fetchFilter = async () => {
  try {
    const params = {
      name: filters.name
    }
    const { data } = await axios.get(`https://67184dbcb9589601.mokky.dev/items`, {params})
    itemsInput.value = data
  } catch (err) {
    console.log(err)
  }
}

watch(filters, () => {
  fetchFilter()
})

</script>

<template>
  <div>
    <div class="flex justify-between h-11 gap-4">
      <div class="flex gap-3 items-center">
        <img id="pizza" class="h-9 " src="/logo.png" alt="">
        <div class="flex flex-col items-center">
          <h2 class="font-black text-2xl">VUE PIZZA</h2>
          <span class="text-slate-400 text-sm leading-3">вкусней уже некуда</span>
        </div>
      </div>
      <div class="flex flex-grow px-10">
        <div class="flex-grow relative">
          <img width="18" class="absolute top-3 left-3 z-50" src="/public/assets/images/Vector.svg" alt="">
          <input
            class=" relative z-40 bg-zinc-100 h-full w-full rounded-xl pl-10 text-md border border-zinc-50 focus:outline-none focus:border-slate-300"
            type="text"
            placeholder="Поиск пиццы..."
            @input="filterAdd"
            @focus="openSearch"
            @focusout="closeSearch"
          >
          <div
            :class="[
            'absolute w-full h-[200px] mt-4 rounded-xl bg-white opacity-0 shadow-2xl transition duration-300',
            showInputSearch === true ? 'opacity-100 -translate-y-3' : ''
            ]"
            style="z-index: 100;"
          ></div>
        </div>
      </div>
      <MyButton width="13" content="Войти" image-url="assets/images/Group.svg"/>
    </div>
  </div>
</template>

<style>
  .pizza {
    height: 40px !important;
  }
</style>
