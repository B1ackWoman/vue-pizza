<script setup>
import { inject, onMounted, reactive, ref, toRaw, watch } from 'vue';

import axios from 'axios';

import debounce from 'debounce';

import MyButton from './MyButton.vue';
import InputCardList from './InputCardList.vue';

const { showInputSearch } = inject('input')
const { model } = inject('all')

const show = ref(false)
const showSearch = ref(false)

const filters = reactive({})
const timeItemsInput = ref([])
const itemsInput = ref([])

const debounceOpen = debounce(() => {
  showInputSearch.value = true
}, 300)

const openSearch = () => {
  showSearch.value = true
  document.body.style.overflow = 'hidden'
  model.value = true
  debounceOpen()
}



const closeSearch = () => {
  showInputSearch.value = false
  document.body.style.overflow = ''
  model.value = false
  closeSearchDebounce()
}

const filterAdd = (event) => {
  filters.name = `*${event.target.value}*`
  console.log(filters)
}

const showDebounce = debounce(() => {
  show.value = true
}, 300)

const closeSearchDebounce = debounce(() => {
  showSearch.value = false
}, 300)

const fetchFilter = async () => {
  try {
    const params = {
      name: filters.name
    }
    const { data } = await axios.get(`https://67184dbcb9589601.mokky.dev/items`, {params})
    timeItemsInput.value = filters.name.length > 2
                          ? data.length !== 0
                          ? data.slice(0, 7)
                          : JSON.parse(JSON.stringify(itemsInput.value.slice(0, 2)))
                          : JSON.parse(JSON.stringify(itemsInput.value))

    console.log(data.length, timeItemsInput.value)
    console.log(timeItemsInput.value)
  } catch (err) {
    console.log(err)
  }
}

const fetchInputSearch = async () => {
  try {
    const params = {
      name: filters.name
    }
    const { data } = await axios.get(`https://67184dbcb9589601.mokky.dev/items`, {params})
    itemsInput.value = data.slice(15, 22)
    timeItemsInput.value = JSON.parse(JSON.stringify(itemsInput.value))
    console.log(itemsInput.value, 11111)
    showDebounce()
  } catch (err) {
    console.log(err)
  }
}

const fetchFilterDebounce = debounce(() => {
  fetchFilter()
}, 500)

watch(filters, () => {
  fetchFilterDebounce()
})

onMounted(fetchInputSearch)

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
          <img width="18" :class="['absolute top-3 left-3', showSearch === false ? 'z-20' : 'z-40']" src="/public/assets/images/Vector.svg" alt="">
          <input
            :class="[
              'relative bg-zinc-100 h-full w-full rounded-xl pl-10 text-md border border-zinc-50 focus:outline-none focus:border-slate-300',
              showSearch === false ? 'z-10' : 'z-30'
            ]"

            type="text"
            placeholder="Поиск пиццы..."
            @input="filterAdd"
            @focusin="openSearch"
            @focusout="closeSearch"
          >
          <InputCardList v-show="showSearch" :items="timeItemsInput" :show-input-search="showInputSearch" />
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
