<script setup>
import { onMounted, provide, ref, watch } from 'vue';
import axios, { all } from 'axios';
import CardList from './components/CardList.vue';
import MyHeader from './components/MyHeader.vue';
import NavPanel from './components/NavPanel.vue';
import FilterAll from './components/FilterAll.vue'
import PopItem from './components/PopItem.vue';
import MyDrawer from './components/MyDrawer.vue';
import debounce from 'debounce';

const modelOpen = ref(false)
const modelOpenTrans = ref(false)
const openDrawer = ref(false)
const openDrawerTrans = ref(false)

const cart = ref([])

const allPrice = ref(0)

const itemTime = ref([])

const items = ref([])
const itemsTime = ref([])

const pizza = ref([])
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


const haveValue = () => {
  value1.value = minPrice.value
  value2.value = maxPrice.value
}

const addOrDelSize = (item) => {
  item.isAdded = !item.isAdded
  if (item.isAdded) {
    filterTimeSize.value.push(item.text)
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
  pizzaTime.value = pizza.value.filter(piz => filterTime.value.every(item => piz.discription.split(', ').includes(item))
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
    pizza.value = itemsTime.value.filter(fil => fil.class === 'pizza')
    pizzaTime.value = itemsTime.value.filter(fil => fil.class === 'pizza')
    maxPrice.value = Math.max(...data.map(fil => fil.price))
    minPrice.value = Math.min(...data.map(fil => fil.price))
    breakfast.value = itemsTime.value.filter(fil => fil.class === 'breakfast')
    snacks.value = itemsTime.value.filter(fil => fil.class === 'snacks')
    cocktails.value = itemsTime.value.filter(fil => fil.class === 'cocktails')
    drinks.value = itemsTime.value.filter(fil => fil.class === 'drinks')
    haveValue()

  } catch (err) {
    console.log(err)
  }
}

const newItems = () => {
  filterItems()
  filterPizza()
  pizza.value = itemsTime.value.filter(fil => fil.class === 'pizza')
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
  debounceDrawerOpen()
}

const closeDrawer = () => {
  openDrawerTrans.value = !openDrawerTrans.value
  debounceDrawerClose()
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




provide('cart', {
  cart,
  allPrice
})

provide('model', {
  modelOpen,
  itemTime,
  openDrawer,
  openDrawerTrans,
  openDrawerFunc,
  closeDrawer
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

watch(filterTime, async () => {
  filterPizza()
}, { deep: true })

watch(filterTimeSize, filterPizza, { deep: true })

watch(filterTimeType, filterPizza, { deep: true })

watch(value1.value, () => {
  newItems()
})

watch(value2.value, () => {
  newItems()
})

watch(cart, () => {
  changePrice()
}, { deep: true })

onMounted(async () => {
  fetchItems()
  fetchFilter()
})

</script>

<template>
  <div v-show="openDrawer">
    <MyDrawer />
  </div>
  <div v-show="modelOpen">
    <PopItem :item="itemTime" />
  </div>
  <div class="relative">
    <div class="flex flex-col items-center border-b ">
      <div class="w-full max-w-screen-xl py-10">
        <MyHeader />
      </div>
    </div>
    <div  class="sticky top-0 z-10 bg-white flex flex-col items-center border-b shadow-md rounded-xl">
      <div class="w-full max-w-screen-xl py-6 bg-white">
        <NavPanel :amount="cart.length" :content-list="0" />
      </div>
    </div>
    <div :style="{zIndex: 0}" class="relative flex flex-col justify-center items-center w-full h-full py-7 px-7">
      <div class="w-full h-full bg-white rounded-2xl max-w-screen-xl">
          <div class="flex py-10 gap-20">
            <div class="w-min">
              <FilterAll />
            </div>
            <div>
              <CardList ref="pizza" id="Пиццы" title="Пиццы" content="+ Добавить" :items="pizzaTime" />
              <CardList id="Завтрак" title="Завтрак" content="+ Добавить" :items="breakfast" />
              <CardList id="Закуски" title="Закуски" content="+ Добавить" :items="snacks" />
              <CardList id="Коктели" title="Коктели" content="+ Добавить" :items="cocktails" />
              <CardList id="Напитки" title="Напитки" content="+ Добавить" :items="drinks" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap');

* {
  font-family: "Nunito";
}

</style>
