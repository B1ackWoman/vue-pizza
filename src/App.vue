<script setup>
import { onMounted, provide, ref, watch } from 'vue';
import axios, { all } from 'axios';

import MyHome from './pages/MyHome.vue';
import MyHeader from './components/MyHeader.vue';
import PopItem from './components/PopItem.vue';
import MyDrawer from './components/MyDrawer.vue';
import debounce from 'debounce';

const modelOpen = ref(false)
const modelOpenTrans = ref(false)
const openDrawer = ref(false)
const openDrawerTrans = ref(false)

const cart = ref([])
const order = ref([])

const animateForDrawer = ref(true)

const allPrice = ref(0)
const allPriceOrder = ref(0)

const itemTime = ref([])

const items = ref([])
const itemsTime = ref([])

const pizza = ref([])
const pizzas = ref ([])
const pizzaTime = ref([])
const breakfast = ref([])
const snacks = ref([])
const cocktails = ref([])
const drinks = ref([])

const maxPrice = ref()
const minPrice = ref()

const value1 = ref()
const value2 = ref()

const filterTime = ref([])
const filterTimeSize = ref([])
const timeSize = ref(60)

const filterTimeType = ref([])

const ingredientsFilter = ref([])

const size = ref([])
const ingredients = ref([])

const ingForPizza = ref([])
const ingForPizzaTime = ref([])

const type = ref([])

const typeTime = ref([])

const showInputSearch = ref(false)

const model = ref(false)

const placeOrders = ref(false)
const animateOrder = ref(false)


const debounceOpen = (debounce(() => {
  modelOpenTrans.value = true
}, 300))


const openModel = (item) => {
  modelOpen.value = !modelOpen.value
  document.body.style.overflow = 'hidden'
  itemTime.value = JSON.parse(JSON.stringify(item))
  console.log(itemTime.value)
  modelOpenTrans.value = false
  debounceOpen()
}


const haveValue = () => {
  value1.value = minPrice.value
  value2.value = maxPrice.value
  console.log(value1.value, value2.value, 1231)
}

const addOrDelSize = (item) => {
  item.isAdded = !item.isAdded
  if (item.isAdded) {
    filterTimeSize.value.push(item.text)
    console.log(filterTimeSize.value, true)
  } else {
    filterTimeSize.value = filterTimeSize.value.filter(itm => itm !== item.text)
  }
}

const addOrDelIng = (item) => {

  item.isAdded = !item.isAdded
  if (item.isAdded) {
    filterTime.value.push(item.text)
  } else {
    filterTime.value = filterTime.value.filter(itm => itm !== item.text)
  }
}

const addOrDelType = (item) => {
  item.isAdded = !item.isAdded
  typeTime.value = (item.id === 15)
                      ? type.value.filter(types => types.id == 16)
                      : type.value.filter(types => types.id == 15)
  if (item.isAdded === true) {
    filterTimeType.value.push(item.text)
    filterTimeType.value = filterTimeType.value.filter(itm => itm === item.text)
    typeTime.value[0].isAdded = false
  } else {
    filterTimeType.value = filterTimeType.value.filter(itm => itm !== item.text)
  }
}

const filterPizza = () => {
  console.log(pizza, 1)
  pizzaTime.value = pizzas.value.filter(piz => filterTime.value.every(item => piz.discription.split(', ').includes(item))
  && filterTimeSize.value.every(item => piz.size.split(', ').includes(item))
  && filterTimeType.value.every(item => piz.type.split(', ').includes(item)))
}

const filterItems = () => {
  itemsTime.value = items.value.filter(item => item.price >= value1.value && item.price <= value2.value)
}

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://67184dbcb9589601.mokky.dev/items')
    items.value = data
    itemsTime.value = data
    pizzas.value = itemsTime.value.filter(fil => fil.class === 'pizza')
    console.log(pizzaTime.value, 1232131)
    pizzaTime.value = itemsTime.value.filter(fil => fil.class === 'pizza')
    maxPrice.value = Math.max(...data.map(fil => fil.price))
    minPrice.value = Math.min(...data.map(fil => fil.price))
    breakfast.value = itemsTime.value.filter(fil => fil.class === 'breakfast')
    snacks.value = itemsTime.value.filter(fil => fil.class === 'snacks')
    cocktails.value = itemsTime.value.filter(fil => fil.class === 'cocktails')
    drinks.value = itemsTime.value.filter(fil => fil.class === 'drinks')
    haveValue()
    console.log(pizza.value, 11)

  } catch (err) {
    console.log(err)
  }
}

const newItems = () => {
  filterItems()
  filterPizza()
  pizzas.value = itemsTime.value.filter(fil => fil.class === 'pizza')
  breakfast.value = itemsTime.value.filter(fil => fil.class === 'breakfast')
  snacks.value = itemsTime.value.filter(fil => fil.class === 'snacks')
  cocktails.value = itemsTime.value.filter(fil => fil.class === 'cocktails')
  drinks.value = itemsTime.value.filter(fil => fil.class === 'drinks')
}

const fetchFilter = async () => {
  try {
    const { data } = await axios.get('https://67184dbcb9589601.mokky.dev/filters')
    size.value = data.filter(filter => filter.class === 'size')
    ingredients.value = data.filter(filter => filter.class === 'ingredients')
    ingForPizza.value = JSON.parse(JSON.stringify(ingredients.value))
    ingForPizzaTime.value = JSON.parse(JSON.stringify(ingredients.value))
    type.value = data.filter(filter => filter.class === 'type')
    ingredientsFilter.value = ingredients.value.map(ing => ing.text)
  } catch (err) {
    console.log(err)
  }
}

const openDrawerFunc = () => {
  openDrawer.value = !openDrawer.value
  document.body.style.overflow = 'hidden'
  debounceDrawerOpen()
}

const closeDrawer = () => {
  openDrawerTrans.value = !openDrawerTrans.value
  document.body.style.overflow = ''
  debounceDrawerClose()
}

const debounceAnimate = debounce(() => {
  animateOrder.value = true
}, 400)

const placeOrder = () => {
  placeOrders.value = true
  openDrawer.value = false
  openDrawerTrans.value = false
  document.body.style.overflow = ''
  document.body.style.backgroundColor = 'rgb(248 250 252)'
  order.value = JSON.parse(JSON.stringify(cart.value))
  allPriceOrder.value = Number(JSON.stringify(allPrice.value))
  console.log(allPriceOrder.value, false)
  debounceAnimate()
}

const debounceDrawerOpen = debounce(() => {
  openDrawerTrans.value = !openDrawerTrans.value
})

const debounceDrawerClose = debounce(() => {
  openDrawer.value = !openDrawer.value
})

const changePrice = () => {
  console.log(cart.value.length)
  allPrice.value = cart.value.map(itm => itm.price).reduce((acc, cur) => acc + cur, 0)
}

const landing = () => {
  placeOrders.value = false
  animateOrder.value = false
  document.body.style.backgroundColor = 'white'
}

provide('all', {
  model,
  landing
})

provide('input', {
  showInputSearch
})

provide('cart', {
  cart,
  allPrice,
  allPriceOrder,
  animateForDrawer,
})

provide('model', {
  modelOpen,
  itemTime,
  openDrawer,
  openDrawerTrans,
  openModel,
  openDrawerFunc,
  closeDrawer,
})

provide('box', {
  addOrDelSize,
  addOrDelIng,
  addOrDelType,
  size,
  ingredients,
  ingForPizza,
  ingForPizzaTime,
  type,
  timeSize
})

provide('filter', {
  minPrice,
  maxPrice,
  value1,
  value2
})

provide('modelTr', {
  modelOpenTrans
})

provide('Home', {
  cart,
  pizzaTime,
  breakfast,
  snacks,
  cocktails,
  drinks,
  fetchFilter,
  fetchItems,
  placeOrder
})

provide('Order', {
  placeOrders,
  order,
  animateOrder
})

watch(filterTime, () => {
  filterPizza()
}, { deep: true })

watch(filterTimeSize, () => {
  filterPizza()
}, { deep: true })

watch(filterTimeType, filterPizza, { deep: true })

watch(value1, () => {
  newItems()
})

watch(value2, () => {
  newItems()
})

watch(cart, () => {
  changePrice()
}, { deep: true })

</script>

<template>
  <div v-show="model" class="fixed z-20 w-full h-full bg-black opacity-50">
  </div>
  <div v-show="openDrawer">
    <MyDrawer />
  </div>
  <div v-show="modelOpen">
    <PopItem :item="itemTime" />
  </div>
  <div :class="placeOrders === true ? 'bg-slate-50 mb-5' : 'bg-white'">
    <div class="flex flex-col items-center border-b ">
      <div class="w-full max-w-screen-xl py-10">
        <MyHeader />
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap');

* {
  font-family: "Nunito";
}

html {
  scrollbar-width: thin;
}
</style>
