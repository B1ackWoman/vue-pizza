<script setup>

import axios from 'axios';
import MyNav from './MyNav.vue';
import { onMounted, ref } from 'vue';

const navItems = ref([]);
const element = ref()

const fetchNav = async () => {
  try {
    const { data } = await axios.get('https://67184dbcb9589601.mokky.dev/navv')
    navItems.value = data
    console.log(navItems.value)
  } catch (err) {
    console.log(err)
  }
}

const isActiveFunc = (item) => {
  navItems.value = navItems.value.map(itm => {
    if (item.id === itm.id) {
      return {
        ...itm,
        isActive: true
      }
    } else {
      return {
        ...itm,
        isActive: false
      }
    }
  })
  element.value = document.getElementById(item.name)
  if (element.value) {
    element.value.scrollIntoView({
      behavior: 'smooth',
    })
  }
  console.log(item.name)
}



onMounted(fetchNav)
</script>

<template>
  <MyNav
    v-for="item in navItems"
    :key="item.id"
    :content="item.name"
    :is-active="item.isActive"
    @is-active-func="isActiveFunc(item)"
  />
</template>
