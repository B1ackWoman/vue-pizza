<script setup>
import { ref, inject } from 'vue';

import debounce from 'debounce';

import CardDrawer from './CardDrawer.vue';

defineProps({
  items: Array,
})

const { cart, animateForDrawer } = inject('cart')
const animateCardDel = ref()

const debounceForAll = debounce((item) => {
  cart.value = cart.value.filter(itm => itm.realId !== item.realId)
  console.log(cart.length, true)
}, 300)

const cartDelItem = (item) => {
  animateForDrawer.value = cart.value.length == 1 ? true : false
  animateCardDel.value = item.realId
  debounceForAll(item)
}

const countPlus = (item) => {
  item.count++
  item.price = item.realPrice * item.count
  item.disabled = false
}

const countMinus = (item) => {
  item.disabled = item.count < 3 ? true : false
  item.count--
  item.price = item.realPrice * item.count
}

</script>

<template>
  <transition-group
    :class="[
      'grid grid-cols-1 gap-4 transition duration-300 opacity-100'
    ]"
    tag="div"
    name="cardList"
  >
    <CardDrawer v-for="item in items"
    :key="item.realId"
    :item="item"
    :price="item.price"
    :name="item.name"
    :image-url="item.imageUrl"
    :id="item.realId"
    :count="item.count"
    :need-size="item.needSize"
    :all-ing="item.allIng.join(', ')"
    :type="item.type"
    :disabled="item.disabled"
    :animate-card-del="animateCardDel"
    @count-minus="countMinus(item)"
    @count-plus="countPlus(item)"
    @cart-del-item="cartDelItem(item)"
    />
  </transition-group>
</template>


<style>

.cardList-leave-active {
  position: absolute;
}

</style>
