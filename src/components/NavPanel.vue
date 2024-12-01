<script setup>
import MyNav from './MyNav.vue';
import MySort from './MySort.vue';

defineProps ({
  contentList: Number
})

</script>

<template>
  <div class="flex justify-between">
    <div class="flex bg-slate-50 rounded-2xl w-min">
      <MyNav
        content="Пиццы"
        :style="{
          backgroundColor: contentList == 0 ? 'white' : '',
          color: contentList == 0 ? 'rgb(251 146 60)' : '',
          boxShadow: contentList == 0 ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : ''
        }"
      />
      <MyNav content="Завтрак" />
      <MyNav content="Закуски" />
      <MyNav content="Коктели" />
      <MyNav content="Напитки" />
    </div>
    <div>
      <MySort />
    </div>
  </div>
</template>
