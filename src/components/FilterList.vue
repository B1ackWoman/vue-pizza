<script setup>
import CheckBox from './CheckBox.vue'

defineProps ({
  items: Array,
  imageTrue: String,
  imageFalse: String,
  addContent: String,
})

const emit = defineEmits(['addOrDel'])

</script>

<template>
  <div  v-for="item of items" :key="item.id">
    <CheckBox
      :content="item.text"
      :add-content="addContent"
      :is-added="item.isAdded"
      :add-or-del="() => emit('addOrDel', item)"
      :image-false="imageFalse"
      :image-true="imageTrue"
    />
  </div>
</template>
