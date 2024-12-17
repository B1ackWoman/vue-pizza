<script setup>

import { inject } from 'vue'

import ButtonLogin from './ButtonLogin.vue';
import InputLoginForm from './inputLoginForm.vue';

const { model, loginOpen } = inject('all')


const closeLoginForm = () => {
  loginOpen.value = false
  model.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <transition>
    <div class="z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[450px] h-[550px] bg-white border rounded-2xl px-10 py-10 flex flex-col" v-show="loginOpen" >
      <div @click="closeLoginForm" class="fixed group cursor-pointer top-0 right-3 w-10 h-10 z-50">
        <span class="absolute w-4 border-b border-2 border-slate-400  left-4 top-6 rotate-45 group-hover:border-slate-600 group-hover:scale-x-105 transtion duration-200"></span>
        <span class="absolute w-4 border-b border-2 border-slate-400  left-4 top-6 -rotate-45 group-hover:border-slate-600 group-hover:scale-x-105 transtion duration-200"></span>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <div>
            <h2 class="text-2xl font-bold" >Вход в аккаунт</h2>
            <span class="text-slate-400">Введите свою почту, чтобы войти в свой аккаунт</span>
          </div>
          <img class="w-19 h-16" src="/assets/images/phone-icon.png" alt="">
        </div>
        <InputLoginForm content="E-mail" />
        <InputLoginForm content="Пароль" />
        <ButtonLogin content="Войти" :login="true" />
        <div class="flex gap-2">
          <ButtonLogin content="GitHub" :login="false" :link="true" image-url="/assets/images/github.svg" wdth="25"/>
          <ButtonLogin content="Google" :login="false" :link="true" image-url="/assets/images/google.svg" wdth="27"/>
        </div>
        <div class="border-b"></div>
        <ButtonLogin content="Регистрация" :login="false" />
      </div>
    </div>
  </transition>
</template>

<style>

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-43%)
}

.v-enter-to, .v-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%)
}

.v-enter-active, .v-leave-active {
  transition: all 0.08s ease
}

</style>
