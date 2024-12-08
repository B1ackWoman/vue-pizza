<script setup>

defineProps({
  content: String,
  disabled: Boolean,
})

const emit = defineEmits(['counter'])

</script>

<template>
  <button
    @click="emit('counter')"
    :disabled="disabled"
    :class="[
      'flex items-center justify-center text-2xl text-orange-500 border w-8 h-8 border-orange-500 rounded-xl transition duration-200',
      disabled === true ? 'border-slate-400 text-slate-400 bg-white' : 'text-orange-500 hover:-translate-y-1 hover:font-bold'
    ]">
    {{ content }}
  </button>
</template>
