<script setup>
import { onMounted, provide, ref, watch, inject, nextTick } from 'vue';

import axios, { all } from 'axios';

import ButtonFilter from './ButtonFilter.vue';
import IngItemList from './IngItemList.vue';
import debounce from 'debounce';
import js from '@eslint/js';

defineProps({
  item: Object,
})

const modelItem = ref()

const counterId = ref(0)

const allContent = ref([]);
const allContentTime = ref([])
const sizeContent = ref([]);
const sizeContentTime = ref([]);
const typeContent = ref([]);

const timeSizeN = ref(1)
const timeSize = ref(100)

let summPrice = ref(0)
const summPriceList = ref([])

const { cart, animateForDrawer } = inject('cart')
const { ingForPizza, ingForPizzaTime } = inject('box')
const { modelOpen, itemTime } = inject('model')
const { modelOpenTrans } = inject('modelTr')


const debounceModel = debounce(() => {
  modelOpenTrans.value = true
  if (modelOpen.value === true) {
    summPriceList.value.push(itemTime.value)
  }
}, 200)

const closeDebounce = debounce(() => {closeModal()}, 200)

const allClose = () => {
  modelOpenTrans.value = false
  closeDebounce()
}

const fetchFilterButton = async () => {
  try {
    const { data } = await axios.get('https://67184dbcb9589601.mokky.dev/contentFilter')
    allContent.value = data
    allContentTime.value = JSON.parse(JSON.stringify(allContent.value))
    sizeContent.value = allContent.value.filter(itm => itm.class === 'size')
    sizeContentTime.value = allContentTime.value.filter(itm => itm.class === 'size')
    typeContent.value = allContent.value.filter(itm => itm.class === 'type')

  } catch (err) {
    console.log(err)
  }
}

const onOrOff = (item) => {
  if (item.class === 'size') {
    timeSizeN.value = item.realSize == 20
                    ? 1
                    : item.realSize == 30
                    ? 1.24
                    : 1.47
    timeSize.value = item.realSize
    console.log(timeSizeN.value)
    summPriceList.value = summPriceList.value.map(itm => {
      if (itm.class === 'pizza') {
        return {
          ...itm,
          price: Math.round(itemTime.value.price * timeSizeN.value)
        }
      }
      return itm
    })
    sizeContentTime.value = sizeContentTime.value.map(itm => {
      return {
        ...itm,
        ButtonOnOff: itm.id === item.id ? true : false
      }

    })
  } else {
    typeContent.value = typeContent.value.map(itm => {
      return {
        ...itm,
        ButtonOnOff: itm.id === item.id ? true : false
      }
    })
  }
}

const summPrices = () => {
  summPrice.value = summPriceList.value.length !== 0
                  ? summPriceList.value.map(itm => itm.price).reduce((acc, curr) => acc + curr)
                  : 0
}

const newValButton = () => {
  sizeContent.value = allContent.value.filter(itm => itm.class === 'size' )
  typeContent.value = allContent.value.filter(itm => itm.class === 'type')
}

const addIng = (item) => {
  if (!item.isAdded) {
    summPriceList.value.push(item)
  } else {
    summPriceList.value = summPriceList.value.filter(itm => itm.id !== item.id)
  }
  ingForPizzaTime.value = ingForPizzaTime.value.map(itm => {
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
  if (modelItem.value) {
    modelItem.value.scrollTop = 0
  }
  modelOpen.value = false
  console.log(modelItem.value)
  summPriceList.value = []
  ingForPizzaTime.value = JSON.parse(JSON.stringify(ingForPizza.value))
  sizeContentTime.value = allContentTime.value.filter(itm => itm.class === 'size')
  console.log(ingForPizzaTime.value)
  document.body.style.overflow = ''
  modelOpenTrans.value = true


}

const changeContent = () => {
  if (modelOpen.value === true) {
    typeContent.value = typeContent.value.map(itm => {
        if (itm.content === itemTime.value.type) {
          return {
            ...itm,
            ButtonOnOff: true
          }
        } else {
          return {
            ...itm,
            disabled: true
          }
        }
      })
      timeSize.value = Math.min(...itemTime.value.size.split(', '))
      timeSizeN.value = timeSize.value == 20
                        ? 1
                        : timeSize.value == 30
                        ? 1.24
                        : 1.47
      sizeContentTime.value = sizeContentTime.value.map(itm => {
        if (itemTime.value.size.split(', ').includes(itm.realSize)) {
          return {
            ...itm,
            ButtonOnOff: itm.realSize == timeSize.value ? true : false
          }
        } else {
          return {
            ...itm,
            disabled: true
          }
        }
      })
  } else {
    typeContent.value = allContentTime.value.filter(itm => itm.class === 'type')
  }
}

const addToCart = () => {
  animateForDrawer.value = false
  itemTime.value.realId = counterId.value
  counterId.value++
  itemTime.value.allIng = summPriceList.value.filter(itm => itm.class === 'ingredients').map(itm => itm.text)
  itemTime.value.needSize = timeSize.value
  itemTime.value.price = summPrice.value
  itemTime.value.realPrice = summPrice.value
  itemTime.value.count = 1
  itemTime.value.disabled = true
  console.log(Array.isArray(itemTime.value))
  cart.value.push(itemTime.value)
  console.log(cart.value, 1)
  allClose()
}


provide('button', {
  allContent,
  sizeContent,
  typeContent
})

watch(allContent, async () => {
  newValButton()
}, { deep: true })

watch(summPriceList, async () => {
  summPrices()
}, { deep: true })

watch(modelOpen, () => {
  changeContent()
  debounceModel()
})



onMounted(fetchFilterButton)
</script>

<template>
  <div @click="allClose" class="fixed z-20 w-full h-full bg-black opacity-50" style="z-index: 101;">
  </div>
  <div @click="allClose" :class="['fixed w-full h-full max-h-[700px] max-w-screen-xl z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', timeSize == 0 ? 'max-h-[580px]' : '']" style="z-index: 102;">
    <div @click="allClose" class="fixed group cursor-pointer top-0 right-16 w-10 h-10 z-50" style="z-index: 102;">
      <span class="absolute w-7 border-b border-2 border-white right-5 top-6 rotate-45 group-hover:border-slate-100 group-hover:scale-x-125 transtion duration-200"></span>
      <span class="absolute w-7 border-b border-2 border-white right-5 top-6 -rotate-45 group-hover:border-slate-100 group-hover:scale-x-125 transtion duration-200"></span>
    </div>
  </div>
  <div class="fixed flex w-full h-full max-h-[650px] max-w-screen-lg top-1/2 left-1/2 bg-white shadow-xl transform -translate-x-1/2 rounded-2xl overflow-hidden transition duration-00"
    :class="[
      modelOpenTrans ? 'translate-y-[-50%] opacity-100 transition duration-200' : 'opacity-0 translate-y-[-40%] transition duration-200',
      timeSize == 0 ? 'max-h-[490px]' : ''
    ]"
    style="z-index: 102;"
  >
    <div class="relative w-1/2 h-full px-10 flex items-center justify-center">
      <img :class="' transition duration-200'" width="60%" :src="item.imageUrl" alt=""
        :style="{
          transform: 'scale(' + timeSizeN + ')'
        }"
      >
      <div class="absolute z-index-50 border-0 border-dashed rounded-full w-[240px] h-[240px] left-[130px] top-[200px]" ></div>
      <div :class="['absolute z-index-50 border border-slate-300 border-dashed rounded-full w-[298px] h-[295px] left-[99px] top-[169px]',
                  timeSizeN !== 1 ? 'opacity-0 transition duration-300' : ''
      ]" ></div>
      <div :class="['absolute z-index-50 border border-slate-300 border-dashed rounded-full w-[350px] h-[350px] left-[72px] top-[140px]',
                    timeSizeN === 1.47 ? 'opacity-0 transition duration-300' : ''
      ]" ></div>
    </div>
    <div class="w-1/2">
      <div ref="modelItem" class="flex flex-col gap-1 py-9 bg-slate-50 h-full  overflow-hidden overflow-y-scroll">
        <div class="flex flex-col px-7 gap-2">
          <div class="flex flex-col gap-1">
            <h2 class="font-extrabold text-2xl">{{ item.name }}</h2>
            <span class="text-gray-400 mb-4">{{ timeSize !== 0 ? timeSize + ' см,' : ''}} {{ item.type ? item.type + ' пицца' : '' }}</span>
          </div>
          <div v-show="timeSize != 0" class="flex flex-col gap-5">
            <ButtonFilter :content-item="sizeContentTime" @content-func="onOrOff" :count="3"/>
            <ButtonFilter :content-item="typeContent" @content-func="onOrOff" />
          </div>
        </div>
        <div class="relative">
          <IngItemList v-show="timeSize != 0" :items="ingForPizzaTime" @add-ing="addIng"/>
          <div class="fixed flex justify-center bottom-0 py-5 px-8 bg-slate-50 w-1/2">
            <button @click="addToCart" class="bg-orange-500 text-white font-bold py-4 w-full rounded-2xl">Добавить в корзину за {{ summPrice }} ₽</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
