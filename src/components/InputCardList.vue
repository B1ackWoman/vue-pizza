<script setup>

import { inject } from 'vue'

import InputCardSearch from './InputCardSearch.vue';
import MyEmpty from './MyEmpty.vue';

defineProps({
  items: Array,
  showInputSearch: Boolean,
})

const { openModel } = inject('model')

</script>

<template>
   <div
    :class="[
    'absolute w-full mt-4 rounded-xl bg-white opacity-0 shadow-2xl py-2 transition duration-300',
    showInputSearch === true && items !== 0 ? 'opacity-100 -translate-y-3' : ''
    ]"
    style="z-index: 100;"
    v-auto-animate
  >
    <InputCardSearch
      v-for="item in items"
      :key="item.id"
      :image-url="item.imageUrl"
      :title="item.name"
      @open-model="openModel(item)"
    />
  </div>
</template>
